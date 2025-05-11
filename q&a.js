//object to hold all questions
const allQuestions = [
  {
    id: "startingQuestion",
    text: "What is the color used for?",
    answers: [
      { id: "answer1-1", text: "Text", nextQuestion: "textBranch-q1" },
      { id: "answer1-2", text: "Icon", nextQuestion: "iconBranch-q1" },
      {
        id: "answer1-3",
        text: "Background",
        nextQuestion: "backgroundBranch-q1",
      },
      { id: "answer1-4", text: "Border", nextQuestion: "borderBranch-q1" },
      {
        id: "answer1-5",
        text: "Data vis or Chart",
        nextQuestion: "shadowbranch-q1",
      },
      { id: "answer1-6", text: "Shadow", nextQuestion: "shadowbranch-q1" },
    ],
  },

  // Text branch
  // key: tb- text branch, q1- question 1, a1- answer 1
  {
    id: "textBranch-q1",
    text: "What kind of text?",
    answers: [
      { id: "tb-q1-a1", text: "Neutral", nextQuestion: "textBranch-q2-1" },
      { id: "tb-q1-a2", text: "Link", nextQuestion: "textBranch-q2-2" },
      { id: "tb-q1-a3", text: "Coloured", nextQuestion: "textBranch-q2-3" },
    ],
  },

  {
    id: "textBranch-q2-1",
    text: "What's the purpose of the text?",
    answers: [
      { id: "tb-q2-a1", text: "Default" },
      { id: "tb-q2-a2", text: "Subtle" },
      { id: "tb-q2-a3", text: "Disabled" },
      { id: "tb-q2-a4", text: "Inversed" },
    ],
  },

  {
    id: "textBranch-q2-2",
    text: "What's the purpose of the text?",
    answers: [
      { id: "tb-q3-a1", text: "Default" },
      { id: "tb-q3-a2", text: "Visited" },
    ],
  },

  {
    id: "textBranch-q2-3",
    text: "What's the purpose of the text?",
    answers: [
      { id: "tb-q4-a1", text: "Error" },
      { id: "tb-q4-a2", text: "Success" },
    ],
  },

  // icon branch
  // key: ib- icon branch, q1- question 1, a1- answer 1
  {
    id: "iconBranch-q1",
    text: "Is the icon coloured or neutral?",
    answers: [
      { id: "ib-q1-a1", text: "Coloured", nextQuestion: "iconBranch-q2-1" },
      { id: "ib-q1-a2", text: "Neutral", nextQuestion: "iconBranch-q2-2" },
    ],
  },
  {
    id: "iconBranch-q2-1",
    text: "What semantic meaning does the colour of the icon have?",
    answers: [
      { id: "ib-q2-a1", text: "Information" },
      { id: "ib-q2-a2", text: "Succcess" },
      { id: "ib-q2-a3", text: "Error" },
      { id: "ib-q2-a4", text: "Link" },
    ],
  },
  {
    id: "iconBranch-q2-2",
    text: "What is the icon used for?",
    answers: [
      { id: "ib-q3-a1", text: "Something disabled" },
      { id: "ib-q3-a2", text: "With default text" },
      { id: "ib-q3-a3", text: "inverse (on bold background)" },
    ],
  },
];
