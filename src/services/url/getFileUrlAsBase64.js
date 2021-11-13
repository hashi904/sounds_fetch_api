const getFileUrlAsBase64 = (imageFile) => {
  return URL.createObjectURL(imageFile)
}

export default getFileUrlAsBase64
