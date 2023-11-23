const DOC_TEMPLATE = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "REST API",
    description: "",
  },
  servers: [
    {
      url: "localhost:3000/",
      description: "",
    },
  ],
  paths: {},
  tags: [],
  schemes: ["http"],
  components: {},
};

module.exports = { DOC_TEMPLATE };
