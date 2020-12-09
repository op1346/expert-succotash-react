{data.map(item => (
  item.category === "" &&
  <div>
    <a href={item.url}>{item.companyName}</a>
    <p>{item.desc}</p>
  </div>
))}