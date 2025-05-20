import download from "image-downloader";
import mime from "mime-types";

export const dowloadImage = async (link, destination) => {
  const extension = mime.extension(link);
  const filename = Date.now() + "." + extension;

  options = {
    url: link,
    dest: `${destination}/${filename}`, // will be saved to /path/to/dest/photo.jpg
  };

  try {
    await download.image(options);
    console.log("saved to", filename);
  } catch (error) {
    console.log(error);
  }
};
