import profilePic from '../assets/Foto2.jpg';

const Avatar = () => (
  <img
    src={profilePic}
    alt="Robby Firdauzy Alfenjy"
    className="w-full h-full object-cover object-top"
  />
);

export default Avatar;
