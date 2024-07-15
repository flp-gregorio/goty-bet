interface Props {
  src: string;
}

const ImageAuthComponent = (props: Props) => {
  return (
    <div
      className="hidden bg-cover lg:block lg:w-2/3"
      style={{
        backgroundImage:
          `url(${props.src})`
      }}
    >
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40"></div>
    </div>
  );
};

export default ImageAuthComponent;