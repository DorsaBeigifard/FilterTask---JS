const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2020-03-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2023-02-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2021-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function queryData(data, { sortBy, filterBy, status }) {
  let filteredData = [...data];
  //Status
  if (sortBy === "EARLIEST") {
    filteredData = [...filteredData].sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }

  if (sortBy === "LATEST") {
    filteredData = [...filteredData].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  // Filter
  filteredData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(filterBy.toLowerCase().trim())
  );

  // Status
  if (status === "COMPLETED") {
    filteredData = filteredData.filter((item) => item.completed);
  }
  if (status === "NOT COMPLETED") {
    filteredData = filteredData.filter((item) => !item.completed);
  }
  return filteredData;
}

const result = queryData(notesList, {
  filterBy: "Co",
  status: "ALL",
  sortBy: "EARLIEST",
});

console.log(result);
