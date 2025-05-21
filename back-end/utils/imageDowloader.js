import download from "image-downloader";
import mime from "mime-types";

export const dowloadImage = async (link, destination) => {
  const mimeType = mime.lookup(link);
  const contentType = mime.contentType(mimeType);
  const extension = mime.extension(contentType);

  const filename = `${Date.now()}.${extension}`;

  const options = {
    url: link,
    dest: `${destination}${filename}`, // will be saved to /path/to/dest/photo.jpg
  };

  try {
    await download.image(options);
    return filename;
  } catch (error) {
    console.log(error);
  }
};
