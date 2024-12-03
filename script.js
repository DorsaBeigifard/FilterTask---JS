
const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function queryData({ sort, filter, status }) {
  //object for args cause there are many
  let requestedNote = [...notesList]; //shallow copy of notesList

  if (sort === "earliest") {
    requestedNote = requestedNote.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      if (dateA > dateB) return 1;
      if (dateA < dateB) return -1;
    });
  } else if (sort === "latest") {
    requestedNote = requestedNote.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
    });
  }

  if (status === "completed") {
    requestedNote = requestedNote.filter((note) => note.completed === true);
  } else if (status === "uncompleted") {
    requestedNote = requestedNote.filter((note) => note.completed === false);
  } else {
    //no need to do anything
  }

  if (filter) {
    requestedNote = requestedNote.filter((note) =>
      note.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

  console.log(requestedNote);
}

queryData({
  sort: "latest",
  filter: "in",
  status: "completed",
});
