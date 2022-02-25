interface Props {
  href: string;
  width?: string;
  height?: string;
}

const index = ({ href, width, height }: Props) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`${href}`} />
    </svg>
  );
};

export default index;
