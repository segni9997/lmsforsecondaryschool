"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { useState } from "react";
const passwordschema = z
  .string()
  .min(8, { message: "password must be at least 8 charachter long" })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter.",
  })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter.",
  })
  .regex(/[\d]/, {
    message: "Password must contain at least one digit.",
  })
  .regex(/[@$!%*?&#]/, {
    message: "Password must contain at least one special character.",
  });
const schema = z.object({
  username: z
    .string()
    .min(3, {
      message: "username must be at least 3 and atmost 20 character long!",
    })
    .max(20, {
      message: "username must be at least 3 and atmost 20 character long!",
    }),
  email: z.string().email({ message: "Invalid Email" }),
  password: passwordschema,
  // repassword: z.string(),
  firstName: z.string().min(1, { message: "FirstName Required" }),
  middleName: z.string().min(1, { message: "middle name Required" }),
  lastName: z.string().min(1, { message: "Last name Required" }),
  phone: z.string().min(10, { message: "the format should be +251XXXXXXXXX" }),
  address: z.string().min(1, { message: "Address is Required" }),
  birthDate: z.date({ message: "Birthdate Required" }),
  bloodType: z
    .string()
    .min(1, { message: "Add 2 character example A+" })
    .max(2, { message: "Add 2 character example A+" }),
  gender: z.enum(["Male", "Female"], { message: "Gender Required" }),
  img: z.instanceof(File, { message: "Image is required" }),
});
// .refine((data) => data.password === data.repassword, {
//   message: "Passwords do not match",
//   path: ["repassword"],
// });
type Inputs = z.infer<typeof schema>;
const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [showpassword, setshowpassword] = useState(false);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Add a new Teacher</h1>
      <span className="text-xs text-gray-400 font-medium flex justify-between items-center w-full">
        Authentication Information
        <p className="gap-3 flex items-center justify-between text-[18px]">
          See Password
          <input
            type="checkbox"
            placeholder="see password"
            onChange={(e) => setshowpassword(e.target.checked)}
            className="bg-accent"
            style={{ width: "20px", height: "20px" }}
          />
        </p>
      </span>

      <div className="flex flex-wrap  justify-between gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type={showpassword ? "text" : "password"}
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="BirthDate"
          name="birthdate"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthDate}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 bg-accent p-2 rounded-md text-sm w-full"
            {...register("gender")}
            defaultValue={data?.gender}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-xs text-red-400">
              {errors.gender.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center bg-accent rounded-xl p-1 items-center ">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={24} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-primary text-primary-content p-2 rounded-md">
        {type === "create" ? "Add Teacher" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
