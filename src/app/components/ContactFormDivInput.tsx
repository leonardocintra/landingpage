type ContactFormDivInputProps = {
  htmlFor: string;
  labelText: string;
  inputId: string;
  type: string;
  placeholder: string;
};

export default function ContactFormDivInput(props: ContactFormDivInputProps) {
  return (
    <div className="mt-5">
      <label
        htmlFor={props.htmlFor}
        className="mb-3 block text-base font-medium text-slate-300"
      >
        {props.labelText}
      </label>
      <input
        id={props.inputId}
        name={props.inputId}
        type={props.type}
        placeholder={props.placeholder}
        className="input input-bordered input-accent w-full max-w-md"
      />
    </div>
  );
}
