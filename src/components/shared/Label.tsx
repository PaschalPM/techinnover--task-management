type Props = { text: string; htmlFor?: string; isOptional?: boolean };

export default function Label({ text, htmlFor, isOptional = false }: Props) {
  return (
    <label htmlFor={htmlFor} className="text-xs block my-1.5">
      <span className="font-medium"> {text} </span>
      {isOptional && <span className="opacity-50">(Optional)</span>}
    </label>
  );
}
