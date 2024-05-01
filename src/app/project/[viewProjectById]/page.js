const ViewProjectById = ({ params }) => {
  const { viewProjectById } = params;

  console.log({ viewProjectById });
  return <div>viewProjectById: {viewProjectById}</div>;
};

export default ViewProjectById;
