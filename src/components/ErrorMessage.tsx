interface IProps {
  errorMsg: string;
}

const ErrorMessage = ({ errorMsg }: IProps) => {
  return errorMsg ? (
    <span className="block text-red-700 font-semibold text-sm">{errorMsg}</span>
  ) : null;
};

export default ErrorMessage;
