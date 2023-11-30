import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getVideoById } from "../api";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoById(id);
    setVideo(video);
  }, []);

  return (
    <div className="w-full h-fit px-5 flex flex-col gap-5">
      <Header>
        <Link to="/">
          <img
            src="/img/logo.png"
            alt="Código del Sur Logo"
            className="w-10 h-10 object-contain"
          />
        </Link>
        <button className="cursor-pointer" onClick={() => navigate(-1)}>
          Back
        </button>
      </Header>
    </div>
  );
};

export default DetailPage;
