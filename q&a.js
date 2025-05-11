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

  // background branch
  // key: bb- background branch, q1- question 1, a1- answer 1
  {
    id: "backgroundBranch-q1",
    text: "Where is it being applied to?",
    answers: [
      {
        id: "bb-q1-a1",
        text: "Fill of a surface (e.g card, modal, menu)",
        nextQuestion: "backgroundBranch-q2-2",
      },
      {
        id: "bb-q1-a2",
        text: "Fill of a component (e.g button)",
        nextQuestion: "backgroundBranch-q2-2",
      },
    ],
  },
  {
    id: "backgroundBranch-q2-1",
    text: "What kind of element is this background for?",
    answers: [
      {
        id: "bb-q2-a1",
        text: "Card",
      },
      {
        id: "bb-q2-a2",
        text: "Modal",
      },
      {
        id: "bb-q2-a3",
        text: "Main background",
      },
    ],
  },
  {
    id: "backgroundBranch-q2-2",
    text: "Is it coloured or neutral?",
    answers: [
      {
        id: "bb-q2-a2",
        text: "Coloured",
        nextQuestion: "backgroundBranch-q3-1",
      },
      {
        id: "bb-q2-a1",
        text: "Neutral",
        nextQuestion: "backgroundBranch-q4-2",
      },
    ],
  },
  {
    id: "backgroundBranch-q3-1",
    text: "What semantic meaning does the colour of this background?",
    answers: [
      {
        id: "bb-q3-a1",
        text: "Brand",
        nextQuestion: "backgroundBranch-q4-1",
      },
      {
        id: "bb-q3-a2",
        text: "Information",
      },
      {
        id: "bb-q3-a3",
        text: "Success",
      },
      {
        id: "bb-q3-a4",
        text: "Error",
      },
      {
        id: "bb-q3-a5",
        text: "Warning",
      },
      {
        id: "bb-q3-a6",
        text: "Caution",
      },
    ],
  },

  {
    id: "backgroundBranch-q4-1",
    text: "Question placeholder",
    answers: [
      {
        id: "bb-q4-1-a1",
        text: "Default",
      },
      {
        id: "bb-q4-1-a2",
        text: "Hover",
      },
      {
        id: "bb-q4-1-a3",
        text: "Pressed",
      },
      {
        id: "bb-q4-1-a4",
        text: "Subtle",
      },
      {
        id: "bb-q4-1-a5",
        text: "Subtle-pressed",
      },
      {
        id: "bb-q4-1-a6",
        text: "Subtle-hover",
      },
    ],
  },

  {
    id: "backgroundBranch-q4-2",
    text: "Question placeholder",
    answers: [
      {
        id: "bb-q4-2-a1",
        text: "Input field",
      },
      {
        id: "bb-q4-2-a2",
        text: "Disabled state",
      },
      {
        id: "bb-q4-2-a3",
        text: "Accent",
      },
      {
        id: "bb-q4-2-a4",
        text: "Neutral",
      },
    ],
  },

  //border branch
  // key: bOb- background branch, q1- question 1, a1- answer 1
  {
    id: "borderBranch-q1",
    text: "Is the border coloured or neutral?",
    answers: [
      { id: "bOb-q1-a1", text: "Neutral", nextQuestion: "borderBranch-q2-1" },
      { id: "bOb-q1-a2", text: "Coloured", nextQuestion: "borderBranch-q2-2" },
    ],
  },
  {
    id: "borderBranch-q2-1",
    text: "What is the border used for?",
    answers: [
      { id: "bOb-q2-1-a1", text: "Disabled" },
      //{ id: "bOb-q2-1-a2", text: "Interaction" },
      { id: "bOb-q2-1-a3", text: "Accent" },
      //{ id: "bOb-q2-1-a4", text: "Input field" },
      //{ id: "bOb-q2-1-a5", text: "Other" },
    ],
  },
  {
    id: "borderBranch-q2-2",
    text: "What semantic meaning does the colour of the border have?",
    answers: [
      { id: "bOb-q2-2-a1", text: "Focus" },
      { id: "bOb-q2-2-a2", text: "Brand", nextQuestion: "borderBranch-q2-3-1" },
      { id: "bOb-q2-2-a3", text: "Error", nextQuestion: "borderBranch-q2-3-2" },
    ],
  },
  {
    id: "borderBranch-q2-3-1",
    text: "What is the interaction state",
    answers: [
      { id: "bOb-q2-3-1-a1", text: "Default" },
      { id: "bOb-q2-3-1-a2", text: "Hover" },
      { id: "bOb-q2-3-1-a3", text: "Pressed" },
    ],
  },
  {
    id: "borderBranch-q2-3-2",
    text: "What is the interaction state",
    answers: [
      { id: "bOb-q2-3-2-a1", text: "Default" },
      { id: "bOb-q2-3-2-a2", text: "Hover" },
    ],
  },
];
