type PhotoType = {
  description: string;
  adress: string;
};

const Photo = (photo: PhotoType) => {
  const { adress, description } = photo;
  return (
    <>
      <section>
        <img src={adress} />
      </section>
      <article>
        <code>{description}</code>
      </article>
    </>
  );
};

export default Photo;
