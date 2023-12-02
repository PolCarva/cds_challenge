import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slices/darkModeSlice";

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode.value);
  return (
    <div
      onClick={() => dispatch(toggle())}
      className="cursor-pointer active:-rotate-90 transition-all dark:text-white"
    >
      {isDarkMode === "light" ? (
        <IoSunnySharp className="h-6 w-6" />
      ) : (
        <IoMoon className="h-6 w-6" />
      )}
    </div>
  );
};

export default DarkModeSwitch;
