export const GridList = () => {
  const link: string = "#";
  return (
    <>
      <section>
        <div className="container-2">
          <div className="grid-cols">
            <ul>
              <li>Shop & Learn</li>
              <li>
                <a href={link}>Music</a>
              </li>
              <li>
                <a href={link}>Movies</a>
              </li>
              <li>
                <a href={link}>Shows</a>
              </li>
              <li>
                <a href={link}>Apps</a>
              </li>
              <li>
                <a href={link}>Gift Cards</a>
              </li>
            </ul>

            <ul>
              <li>Record Store</li>
              <li>
                <a href={link}>Find a Store</a>
              </li>
              <li>
                <a href={link}>New Albums</a>
              </li>
              <li>
                <a href={link}>Discounts</a>
              </li>
              <li>
                <a href={link}>Order Status</a>
              </li>
            </ul>

            <ul>
              <li>Education & Business</li>
              <li>
                <a href={link}>Education</a>
              </li>
              <li>
                <a href={link}>Shop For College</a>
              </li>
              <li>
                <a href={link}>Orange & Business</a>
              </li>
              <li>
                <a href={link}>Shop For Business</a>
              </li>
              <li>
                <a href={link}>Jobs</a>
              </li>
            </ul>

            <ul>
              <li>About Record</li>
              <li>
                <a href={link}>Newsroom</a>
              </li>
              <li>
                <a href={link}>Leadership</a>
              </li>
              <li>
                <a href={link}>Events</a>
              </li>
              <li>
                <a href={link}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
