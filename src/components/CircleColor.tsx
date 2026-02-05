interface IProps {
  color: string;
}

const CircleColor = ({ color }: IProps) => {
  return (
    <span
      className="w-5 h-5 mb-1.5 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
    />
  ); 
};

export default CircleColor;
