export const IFrame = ({
  src,
  width = "100%",
  height = "100%",
  title,
  ...props
}) => {
  return (
    <iframe
      title={title}
      src={src}
      role="presentation"
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen
      {...props}
    />
  );
};
