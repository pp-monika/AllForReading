import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import './BookCoverSection.css'

export const BookCoverSection = () => {

  const { setValue } = useFormContext()

  const [imgUrl, setImgUrl] = useState(null);

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = function (e) {
        setImgUrl(fileReader.result);
      };
      console.log(fileReader);
    }
  };

  useEffect(() => {
    setValue("bookCoverUrl", imgUrl)
  }, [imgUrl, setValue])

  return (
    <div>
      {imgUrl === null ? (
        <div>
          <p>book cover</p>
          <input
            type="file"
            accept="image/*"
            name="img-input"
            id="bookCoverInput"
            onChange={handleOnChange}
          />
        </div>
      ) : (
        { imgUrl } && (
          <img
            id="img-preview"
            src={imgUrl}
            alt="book cover"
            className="pb-3 pt-3 img-fluid"
          ></img>
        )
      )}
    </div>
  );
};
