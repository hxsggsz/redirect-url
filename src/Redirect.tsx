import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {
  const { url } = useParams();

  useEffect(() => {
    window.location.replace(url!);
  }, [url]);
  return <h1>redirecionando para: {url}</h1>;
}
