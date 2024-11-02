export async function POST(request) {
  const formData = await request.formData();

  const password = formData.get("password");
  const email = formData.get("email");

  const response = await axios
    .post(`${process.env.DASHBOARD_BASE_URL}/User/Login`, {
      email,
      password,
    })
    .then((response) => {
      return {
        status: response.data.statusCode,
        data: response.data,
      };
    })
    .catch((err) => {
      return err.response;
    });

  return Response.json(response.data, {
    status: response.status,
  });
}
