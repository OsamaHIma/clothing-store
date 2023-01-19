const userAvatar = ({ photoURL, name }) => {
  return (
    <>
      <article>
        {name ? (
          <>
            <img src={photoURL} alt="avatar" />
            <p>{name}</p>
          </>
        ) : (
          <img src={photoURL} alt="avatar" />
        )}
      </article>
    </>
  );
};
export default userAvatar;
