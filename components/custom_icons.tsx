import Image from 'next/image';

const LumionLogo = () => {
  return (
    <Image
          src="/jahanasireen/assets/Lumion.jpg" // Path to your PNG image
          alt="Lumion"
          width={170} // Specify the width of the image
          height={148} // Specify the height of the image
          className="h-[150px]"
        />
  );
};

const D5 = () => {
  return (
    <Image
          src="/jahanasireen/assets/D5.jpg" // Path to your PNG image
          alt="D5"
          width={170} // Specify the width of the image
          height={148} // Specify the height of the image
          className="h-[150px]"
        />
  );
};

const VRay = () => {
  return (
    <Image
          src="/jahanasireen/assets/V-Ray.jpg" // Path to your PNG image
          alt="V=Ray"
          width={170} // Specify the width of the image
          height={108} // Specify the height of the image
          className="h-[150px]"
        />
  );
};

const Enscape = () => {
  return (
    <Image
          src="/jahanasireen/assets/Enscape.jpg" // Path to your PNG image
          alt="Enscape"
          width={170} // Specify the width of the image
          height={148} // Specify the height of the image
          className="h-[150px]"
        />
  );
};

const Max3DS = () => {
  return (
    <Image
          src="/jahanasireen/assets/3DS-Max.jpg" // Path to your PNG image
          alt="Lumion Logo"
          width={170} // Specify the width of the image
          height={148} // Specify the height of the image
          className="h-[150px]"
        />
  );
};

export { LumionLogo, Max3DS, D5, Enscape, VRay };