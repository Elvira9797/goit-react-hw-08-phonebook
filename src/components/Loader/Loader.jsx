import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      color="#00bcd4"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
