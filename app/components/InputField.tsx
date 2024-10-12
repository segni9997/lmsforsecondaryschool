import { FieldError } from "react-hook-form";

type InputFieldProps = {
    label: string; 
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?:FieldError;
    inputprops?: React.InputHTMLAttributes<HTMLInputElement>;
}
const InputField = ({label,type ="text",register, name, defaultValue, error, inputprops}:InputFieldProps) => {
  return (
    
       <div className="flex flex-col gap-2 w-full md:w-1/4  ">
        
        <label htmlFor="" className="text-gray-500">{label}</label>
  <input
    type={type}
                {...register( name )}
                  {...inputprops}
                  defaultValue={defaultValue}
    className="text-sm ring-[1.5px] ring-gray-200 bg-accent text-accent-content p-2 rounded-md"
  />
  {error?.message && (
    <p className="text-error text-sm ">
      {error?.message.toString()}
    </p>
  )}
</div>
    
  )
}

export default InputField
