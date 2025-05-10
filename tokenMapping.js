/* const tokenMapping = [
  {
    answers: ["Text", "Neutral", "Default"], //user selects those set of answers
    targetTokens: [
      {
        displayName: "default text color",
        path: ["color", "text", "default"],
      },
    ],
  },
]; */

const designTokens = {
  primitives: {
    color: {
      brand: {
        primary: {
          100: {
            $type: "color",
            $value: "#f0eaf4",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-100",
                },
                variableId: "VariableID:77:607",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#d3c1dd",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-200",
                },
                variableId: "VariableID:77:608",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#b698c7",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-300",
                },
                variableId: "VariableID:77:609",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#986eb1",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-400",
                },
                variableId: "VariableID:77:610",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#6c308f",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-500",
                },
                variableId: "VariableID:77:611",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          600: {
            $type: "color",
            $value: "#562672",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-600",
                },
                variableId: "VariableID:77:612",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          700: {
            $type: "color",
            $value: "#411d56",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-700",
                },
                variableId: "VariableID:77:613",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#2b1339",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-800",
                },
                variableId: "VariableID:77:614",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          900: {
            $type: "color",
            $value: "#13081a",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-primary-900",
                },
                variableId: "VariableID:3163:7110",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        secondary: {
          100: {
            $type: "color",
            $value: "#ffe6ef",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-secondary-100",
                },
                variableId: "VariableID:77:615",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#ffb3ce",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-secondary-100",
                },
                variableId: "VariableID:77:616",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#ff025c",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-secondary-100",
                },
                variableId: "VariableID:77:617",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#b30140",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-brand-secondary-400",
                },
                variableId: "VariableID:77:618",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
      },
      neutral: {
        0: {
          $type: "color",
          $value: "#ffffff",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-0",
              },
              variableId: "VariableID:78:641",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        50: {
          $type: "color",
          $value: "#fafafa",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-50",
              },
              variableId: "VariableID:77:623",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        100: {
          $type: "color",
          $value: "#f5f5f5",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-100",
              },
              variableId: "VariableID:79:651",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        150: {
          $type: "color",
          $value: "#e9e9e9",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-150",
              },
              variableId: "VariableID:1406:22846",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        200: {
          $type: "color",
          $value: "#d2d2d2",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-200",
              },
              variableId: "VariableID:78:642",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        300: {
          $type: "color",
          $value: "#bcbcbc",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-300",
              },
              variableId: "VariableID:78:643",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        400: {
          $type: "color",
          $value: "#a6a6a6",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-400",
              },
              variableId: "VariableID:78:644",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        500: {
          $type: "color",
          $value: "#8f8f8f",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-500",
              },
              variableId: "VariableID:78:645",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        600: {
          $type: "color",
          $value: "#797979",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-600",
              },
              variableId: "VariableID:78:646",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        700: {
          $type: "color",
          $value: "#636363",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-700",
              },
              variableId: "VariableID:78:647",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        800: {
          $type: "color",
          $value: "#4d4d4d",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-800",
              },
              variableId: "VariableID:78:648",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        900: {
          $type: "color",
          $value: "#363636",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-900",
              },
              variableId: "VariableID:78:649",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        925: {
          $type: "color",
          $value: "#282828",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-925",
              },
              variableId: "VariableID:4222:2135",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        950: {
          $type: "color",
          $value: "#202020",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-neutral-950",
              },
              variableId: "VariableID:239:3803",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
      },
      alpha: {
        "white-32": {
          $type: "color",
          $value: "#ffffff52",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-alpha-white-32",
              },
              variableId: "VariableID:77:624",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        "white-8": {
          $type: "color",
          $value: "#ffffff14",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-alpha-white-8",
              },
              variableId: "VariableID:241:1270",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        "grey-8": {
          $type: "color",
          $value: "#36363614",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-alpha-grey-8",
              },
              variableId: "VariableID:241:1271",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
        "grey-32": {
          $type: "color",
          $value: "#36363652",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-alpha-grey-32",
              },
              variableId: "VariableID:241:1272",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
      },
      status: {
        green: {
          100: {
            $type: "color",
            $value: "#e6f6e8",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-green-100",
                },
                variableId: "VariableID:77:625",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#b3e3bb",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-green-200",
                },
                variableId: "VariableID:77:626",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#03a01c",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-green-300",
                },
                variableId: "VariableID:77:627",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#026011",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-green-400",
                },
                variableId: "VariableID:77:628",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        yellow: {
          100: {
            $type: "color",
            $value: "#fffaea",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-yellow-100",
                },
                variableId: "VariableID:77:629",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#fff1c0",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-yellow-200",
                },
                variableId: "VariableID:77:630",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#ffcf2d",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-yellow-300",
                },
                variableId: "VariableID:77:631",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#806817",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-yellow-400",
                },
                variableId: "VariableID:77:632",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        red: {
          100: {
            $type: "color",
            $value: "#fdeaeb",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-red-100",
                },
                variableId: "VariableID:77:633",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          150: {
            $type: "color",
            $value: "#f8aab1",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-red-150",
                },
                variableId: "VariableID:4192:7199",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#ee2b3b",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-red-200",
                },
                variableId: "VariableID:77:634",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#a71e29",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-red-300",
                },
                variableId: "VariableID:77:635",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#5f1118",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-red-400",
                },
                variableId: "VariableID:77:636",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        blue: {
          100: {
            $type: "color",
            $value: "#ebeffe",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-blue-100",
                },
                variableId: "VariableID:77:637",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#c2cffb",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-blue-200",
                },
                variableId: "VariableID:77:638",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#355ff3",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-blue-300",
                },
                variableId: "VariableID:77:639",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#2543aa",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-blue-400",
                },
                variableId: "VariableID:77:640",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        orange: {
          100: {
            $type: "color",
            $value: "#fff1e6",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-orange-100",
                },
                variableId: "VariableID:3040:1484",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#ffc899",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-orange-200",
                },
                variableId: "VariableID:3040:1485",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#ff7600",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-orange-300",
                },
                variableId: "VariableID:3040:1486",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#b35300",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-status-orange-400",
                },
                variableId: "VariableID:3040:1487",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
      },
      charts: {
        blue: {
          100: {
            $type: "color",
            $value: "#e5e7ff",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-blue-100",
                },
                variableId: "VariableID:3535:5475",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#4955fc",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-blue-500",
                },
                variableId: "VariableID:3535:5476",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#280d61",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-blue-800",
                },
                variableId: "VariableID:3535:5477",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        pink: {
          100: {
            $type: "color",
            $value: "#fae3ed",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-pink-100",
                },
                variableId: "VariableID:3535:5478",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#f55b9b",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-pink-500",
                },
                variableId: "VariableID:3535:5479",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#801650",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-pink-800",
                },
                variableId: "VariableID:3535:5480",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        green: {
          100: {
            $type: "color",
            $value: "#c2f2ed",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-green-100",
                },
                variableId: "VariableID:3535:5481",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#28a197",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-green-500",
                },
                variableId: "VariableID:3535:5482",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#004a4a",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-green-800",
                },
                variableId: "VariableID:3535:5483",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        orange: {
          100: {
            $type: "color",
            $value: "#ffddbf",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-orange-100",
                },
                variableId: "VariableID:3535:5484",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#ed6f00",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-orange-500",
                },
                variableId: "VariableID:3535:5485",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#842102",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-orange-800",
                },
                variableId: "VariableID:3535:5486",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        grey: {
          500: {
            $type: "color",
            $value: "#8c94a1",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-grey-500",
                },
                variableId: "VariableID:3535:5504",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
        sequential: {
          50: {
            $type: "color",
            $value: "#e5e7ff",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-50",
                },
                variableId: "VariableID:3571:57222",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          100: {
            $type: "color",
            $value: "#cbcffe",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-100",
                },
                variableId: "VariableID:3571:57223",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          200: {
            $type: "color",
            $value: "#aeb3fc",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-200",
                },
                variableId: "VariableID:3571:57224",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          300: {
            $type: "color",
            $value: "#949bf7",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-300",
                },
                variableId: "VariableID:3571:57225",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          400: {
            $type: "color",
            $value: "#7880f0",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-400",
                },
                variableId: "VariableID:3571:57226",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          500: {
            $type: "color",
            $value: "#5d66e8",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-500",
                },
                variableId: "VariableID:3571:57227",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          600: {
            $type: "color",
            $value: "#464bcf",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-600",
                },
                variableId: "VariableID:3571:57228",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          700: {
            $type: "color",
            $value: "#3c36b4",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-700",
                },
                variableId: "VariableID:3571:57229",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          800: {
            $type: "color",
            $value: "#33218a",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-800",
                },
                variableId: "VariableID:3571:57230",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
          900: {
            $type: "color",
            $value: "#280d61",
            $description: "",
            $extensions: {
              mode: {},
              figma: {
                codeSyntax: {
                  WEB: "--axis-p-color-charts-sequential-900",
                },
                variableId: "VariableID:3571:57231",
                collection: {
                  id: "VariableCollectionId:66:2803",
                  name: "primitives",
                  defaultModeId: "66:0",
                },
              },
            },
          },
        },
      },
      accent: {
        100: {
          $type: "color",
          $value: "#f3f5f7",
          $description: "",
          $extensions: {
            mode: {},
            figma: {
              codeSyntax: {
                WEB: "--axis-p-color-accent-100",
              },
              variableId: "VariableID:3550:4738",
              collection: {
                id: "VariableCollectionId:66:2803",
                name: "primitives",
                defaultModeId: "66:0",
              },
            },
          },
        },
      },
    },
  },
  color: {
    icon: {
      default: {
        $type: "color",
        $value: "{primitives.color.neutral.950}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.950}",
            dark: "{primitives.color.neutral.0}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-default",
            },
            variableId: "VariableID:882:3416",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      disabled: {
        $type: "color",
        $value: "{primitives.color.neutral.400}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.400}",
            dark: "{primitives.color.neutral.400}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-disabled",
            },
            variableId: "VariableID:1105:5351",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      inverse: {
        $type: "color",
        $value: "{primitives.color.neutral.0}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.0}",
            dark: "{primitives.color.neutral.950}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-inverse",
            },
            variableId: "VariableID:1429:4058",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      error: {
        $type: "color",
        $value: "{primitives.color.status.red.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.red.300}",
            dark: "{primitives.color.status.red.200}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-error",
            },
            variableId: "VariableID:3864:3827",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      success: {
        $type: "color",
        $value: "{primitives.color.status.green.400}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.green.400}",
            dark: "{primitives.color.status.green.200}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-success",
            },
            variableId: "VariableID:3864:3828",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      visited: {
        $type: "color",
        $value: "{primitives.color.brand.primary.500}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.brand.primary.500}",
            dark: "{primitives.color.brand.primary.200}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-visited",
            },
            variableId: "VariableID:4232:5166",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      info: {
        $type: "color",
        $value: "{primitives.color.status.blue.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.blue.300}",
            dark: "{primitives.color.status.blue.300}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-icon-info",
            },
            variableId: "VariableID:4236:5266",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
    },
    text: {
      default: {
        $type: "color",
        $value: "{primitives.color.neutral.950}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.950}",
            dark: "{primitives.color.neutral.0}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-default",
            },
            variableId: "VariableID:1039:2337",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      subtle: {
        $type: "color",
        $value: "{primitives.color.neutral.800}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.800}",
            dark: "{primitives.color.neutral.100}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-subtle",
            },
            variableId: "VariableID:1039:2338",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      disabled: {
        $type: "color",
        $value: "{primitives.color.neutral.400}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.400}",
            dark: "{primitives.color.neutral.400}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-disabled",
            },
            variableId: "VariableID:1105:5350",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      inverse: {
        $type: "color",
        $value: "{primitives.color.neutral.0}",
        $description:
          "inverse is used for text applied on coloured background, other than the main neutral colour backgrounds",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.0}",
            dark: "{primitives.color.neutral.950}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-inverse",
            },
            variableId: "VariableID:1218:5397",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      "link-visited": {
        $type: "color",
        $value: "{primitives.color.brand.primary.500}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.brand.primary.500}",
            dark: "{primitives.color.brand.primary.200}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-link-visited",
            },
            variableId: "VariableID:3498:3819",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      error: {
        $type: "color",
        $value: "{primitives.color.status.red.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.red.300}",
            dark: "{primitives.color.status.red.150}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-error",
            },
            variableId: "VariableID:3864:3694",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      success: {
        $type: "color",
        $value: "{primitives.color.status.green.400}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.green.400}",
            dark: "{primitives.color.status.green.200}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-success",
            },
            variableId: "VariableID:3864:3695",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      link: {
        $type: "color",
        $value: "{primitives.color.status.blue.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.blue.300}",
            dark: "{primitives.color.status.blue.300}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-text-link",
            },
            variableId: "VariableID:4236:5216",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
    },
    background: {
      input: {
        $type: "color",
        $value: "{primitives.color.neutral.0}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.0}",
            dark: "{primitives.color.neutral.950}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-input",
            },
            variableId: "VariableID:1104:5328",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      information: {
        default: {
          $type: "color",
          $value: "{primitives.color.status.blue.300}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.blue.300}",
              dark: "{primitives.color.status.blue.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-information-default",
              },
              variableId: "VariableID:1408:22885",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        subtle: {
          $type: "color",
          $value: "{primitives.color.status.blue.100}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.blue.100}",
              dark: "{primitives.color.status.blue.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-information-subtle",
              },
              variableId: "VariableID:3230:9255",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      neutral: {
        $type: "color",
        $value: "{primitives.color.neutral.150}",
        $description: "The default background for neutral elements",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.150}",
            dark: "{primitives.color.neutral.600}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral",
            },
            variableId: "VariableID:1409:921",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      "neutral-subtle": {
        $type: "color",
        $value: "{primitives.color.neutral.0}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.0}",
            dark: "{primitives.color.neutral.950}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral-subtle",
            },
            variableId: "VariableID:1410:941",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      "neutral-bold": {
        $type: "color",
        $value: "{primitives.color.neutral.950}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.950}",
            dark: "{primitives.color.neutral.0}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral-bold",
            },
            variableId: "VariableID:1423:4036",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      "neutral-medium": {
        $type: "color",
        $value: "{primitives.color.neutral.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.300}",
            dark: "{primitives.color.neutral.500}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral-medium",
            },
            variableId: "VariableID:1429:4079",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      brand: {
        pressed: {
          $type: "color",
          $value: "{primitives.color.brand.primary.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.800}",
              dark: "{primitives.color.brand.primary.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-pressed",
              },
              variableId: "VariableID:3082:9471",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        hover: {
          $type: "color",
          $value: "{primitives.color.brand.primary.700}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.700}",
              dark: "{primitives.color.brand.primary.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-hover",
              },
              variableId: "VariableID:3082:9472",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        default: {
          $type: "color",
          $value: "{primitives.color.brand.primary.600}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.600}",
              dark: "{primitives.color.brand.primary.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-default",
              },
              variableId: "VariableID:3082:9473",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        subtle: {
          $type: "color",
          $value: "{primitives.color.brand.primary.100}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.100}",
              dark: "{primitives.color.brand.primary.700}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-subtle",
              },
              variableId: "VariableID:3193:7379",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        "subtle-hover": {
          $type: "color",
          $value: "{primitives.color.brand.primary.200}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.200}",
              dark: "{primitives.color.brand.primary.600}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-subtle-hover",
              },
              variableId: "VariableID:3720:3215",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        "subtle-pressed": {
          $type: "color",
          $value: "{primitives.color.brand.primary.300}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.300}",
              dark: "{primitives.color.brand.primary.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-brand-subtle-pressed",
              },
              variableId: "VariableID:3720:3216",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      disabled: {
        $type: "color",
        $value: "{primitives.color.alpha.grey-8}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.alpha.grey-8}",
            dark: "{primitives.color.alpha.white-8}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-disabled",
            },
            variableId: "VariableID:3082:9474",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      hover: {
        $type: "color",
        $value: "{primitives.color.neutral.150}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.150}",
            dark: "{primitives.color.neutral.700}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-hover",
            },
            variableId: "VariableID:3116:11886",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      pressed: {
        $type: "color",
        $value: "{primitives.color.neutral.200}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.200}",
            dark: "{primitives.color.neutral.600}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-pressed",
            },
            variableId: "VariableID:3116:11887",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      loading: {
        $type: "color",
        $value: "{primitives.color.alpha.grey-8}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.alpha.grey-8}",
            dark: "{primitives.color.alpha.white-8}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-loading",
            },
            variableId: "VariableID:3116:11888",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      error: {
        default: {
          $type: "color",
          $value: "{primitives.color.status.red.200}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.red.200}",
              dark: "{primitives.color.status.red.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-error-default",
              },
              variableId: "VariableID:3228:9171",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        subtle: {
          $type: "color",
          $value: "{primitives.color.status.red.100}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.red.100}",
              dark: "{primitives.color.status.red.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-error-subtle",
              },
              variableId: "VariableID:3230:9256",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        bold: {
          $type: "color",
          $value: "{primitives.color.status.red.300}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.red.300}",
              dark: "{primitives.color.status.red.150}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-error-bold",
              },
              variableId: "VariableID:3864:3869",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      success: {
        default: {
          $type: "color",
          $value: "{primitives.color.status.green.300}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.green.300}",
              dark: "{primitives.color.status.green.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-success-default",
              },
              variableId: "VariableID:3228:9172",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        subtle: {
          $type: "color",
          $value: "{primitives.color.status.green.100}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.green.100}",
              dark: "{primitives.color.status.green.400}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-success-subtle",
              },
              variableId: "VariableID:3230:9257",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        bold: {
          $type: "color",
          $value: "{primitives.color.status.green.400}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.green.400}",
              dark: "{primitives.color.status.green.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-success-bold",
              },
              variableId: "VariableID:3864:3870",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      warning: {
        default: {
          $type: "color",
          $value: "{primitives.color.status.yellow.300}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.yellow.300}",
              dark: "{primitives.color.status.yellow.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-warning-default",
              },
              variableId: "VariableID:3228:9173",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        subtle: {
          $type: "color",
          $value: "{primitives.color.status.yellow.200}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.yellow.200}",
              dark: "{primitives.color.status.yellow.400}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-warning-subtle",
              },
              variableId: "VariableID:3230:9258",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        bold: {
          $type: "color",
          $value: "{primitives.color.status.yellow.400}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.yellow.400}",
              dark: "{primitives.color.status.yellow.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-warning-bold",
              },
              variableId: "VariableID:4280:2558",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      caution: {
        subtle: {
          $type: "color",
          $value: "{primitives.color.status.orange.100}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.orange.100}",
              dark: "{primitives.color.status.orange.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-caution-subtle",
              },
              variableId: "VariableID:3312:3278",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        default: {
          $type: "color",
          $value: "{primitives.color.status.orange.300}",
          $description:
            "background for progress elements. E.g spinner, progress bar",
          $extensions: {
            mode: {
              light: "{primitives.color.status.orange.300}",
              dark: "{primitives.color.status.orange.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-background-caution-default",
              },
              variableId: "VariableID:3312:3279",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      "neutral-light": {
        $type: "color",
        $value: "{primitives.color.neutral.100}",
        $description: "The default background for neutral elements",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.100}",
            dark: "{primitives.color.neutral.800}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral-light",
            },
            variableId: "VariableID:3353:7188",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      page: {
        $type: "color",
        $value: "{primitives.color.accent.100}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.accent.100}",
            dark: "{primitives.color.neutral.925}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-page",
            },
            variableId: "VariableID:3431:12013",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      "neutral-lightest": {
        $type: "color",
        $value: "{primitives.color.neutral.50}",
        $description: "The default background for neutral elements",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.50}",
            dark: "{primitives.color.neutral.900}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-background-neutral-lightest",
            },
            variableId: "VariableID:3522:1997",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
    },
    border: {
      "accent-1": {
        $type: "color",
        $value: "{primitives.color.status.blue.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.blue.300}",
            dark: "{primitives.color.status.blue.300}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-accent-1",
            },
            variableId: "VariableID:3056:9470",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      default: {
        $type: "color",
        $value: "{primitives.color.neutral.200}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.200}",
            dark: "{primitives.color.neutral.600}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-default",
            },
            variableId: "VariableID:3116:11881",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      disabled: {
        $type: "color",
        $value: "{primitives.color.alpha.grey-8}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.alpha.grey-8}",
            dark: "{primitives.color.alpha.white-8}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-disabled",
            },
            variableId: "VariableID:3116:11882",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      brand: {
        default: {
          $type: "color",
          $value: "{primitives.color.brand.primary.600}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.600}",
              dark: "{primitives.color.brand.primary.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-border-brand-default",
              },
              variableId: "VariableID:3116:11883",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        hover: {
          $type: "color",
          $value: "{primitives.color.brand.primary.700}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.700}",
              dark: "{primitives.color.brand.primary.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-border-brand-hover",
              },
              variableId: "VariableID:3116:11884",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        pressed: {
          $type: "color",
          $value: "{primitives.color.brand.primary.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.brand.primary.800}",
              dark: "{primitives.color.brand.primary.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-border-brand-pressed",
              },
              variableId: "VariableID:3116:11885",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      error: {
        default: {
          $type: "color",
          $value: "{primitives.color.status.red.300}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.status.red.300}",
              dark: "{primitives.color.status.red.150}",
            },
            figma: {
              codeSyntax: {},
              variableId: "VariableID:3237:11444",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        hover: {
          $type: "color",
          $value: "{primitives.color.status.red.400}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.status.red.400}",
              dark: "{primitives.color.status.red.150}",
            },
            figma: {
              codeSyntax: {},
              variableId: "VariableID:3237:11445",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      "neutral-bold": {
        $type: "color",
        $value: "{primitives.color.neutral.950}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.950}",
            dark: "{primitives.color.neutral.0}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-neutral-bold",
            },
            variableId: "VariableID:3264:15398",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      light: {
        $type: "color",
        $value: "{primitives.color.neutral.150}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.150}",
            dark: "{primitives.color.neutral.800}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-light",
            },
            variableId: "VariableID:3370:10701",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      focus: {
        $type: "color",
        $value: "{primitives.color.status.blue.300}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.status.blue.300}",
            dark: "{primitives.color.status.blue.100}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-focus",
            },
            variableId: "VariableID:4193:7219",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
      neutral: {
        $type: "color",
        $value: "{primitives.color.neutral.0}",
        $description: "",
        $extensions: {
          mode: {
            light: "{primitives.color.neutral.0}",
            dark: "{primitives.color.neutral.950}",
          },
          figma: {
            codeSyntax: {
              WEB: "--axis-color-border-neutral",
            },
            variableId: "VariableID:4282:2579",
            collection: {
              id: "VariableCollectionId:68:602",
              name: "color",
              defaultModeId: "68:2",
            },
          },
        },
      },
    },
    charts: {
      categorical: {
        1: {
          $type: "color",
          $value: "{color.charts.brand.primary}",
          $description: "",
          $extensions: {
            mode: {
              light: "{color.charts.brand.primary}",
              dark: "{primitives.color.charts.blue.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/1",
              },
              variableId: "VariableID:3318:3498",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        2: {
          $type: "color",
          $value: "{primitives.color.charts.blue.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.blue.800}",
              dark: "{primitives.color.charts.blue.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/2",
              },
              variableId: "VariableID:3547:4671",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        3: {
          $type: "color",
          $value: "{primitives.color.charts.pink.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.pink.500}",
              dark: "{primitives.color.charts.pink.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/3",
              },
              variableId: "VariableID:3547:4672",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        4: {
          $type: "color",
          $value: "{primitives.color.charts.green.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.green.800}",
              dark: "{primitives.color.charts.green.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/4",
              },
              variableId: "VariableID:3547:4673",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        5: {
          $type: "color",
          $value: "{primitives.color.charts.orange.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.orange.500}",
              dark: "{primitives.color.charts.orange.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/5",
              },
              variableId: "VariableID:3547:4674",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        6: {
          $type: "color",
          $value: "{primitives.color.charts.pink.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.pink.800}",
              dark: "{primitives.color.charts.pink.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/6",
              },
              variableId: "VariableID:3547:4675",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        7: {
          $type: "color",
          $value: "{primitives.color.charts.green.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.green.500}",
              dark: "{primitives.color.charts.green.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/7",
              },
              variableId: "VariableID:3547:4676",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        8: {
          $type: "color",
          $value: "{primitives.color.charts.orange.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.orange.800}",
              dark: "{primitives.color.charts.orange.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts/categorical/8",
              },
              variableId: "VariableID:3547:4677",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      brand: {
        primary: {
          $type: "color",
          $value: "{primitives.color.charts.blue.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.blue.500}",
              dark: "{primitives.color.charts.blue.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-brand-primary",
              },
              variableId: "VariableID:3547:3900",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        neutral: {
          $type: "color",
          $value: "{primitives.color.charts.grey.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.grey.500}",
              dark: "{primitives.color.charts.grey.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-brand-neutral",
              },
              variableId: "VariableID:3547:3901",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      sequential: {
        50: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.50}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.50}",
              dark: "{primitives.color.charts.sequential.50}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-50",
              },
              variableId: "VariableID:3565:5793",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        100: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.100}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.100}",
              dark: "{primitives.color.charts.sequential.100}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-100",
              },
              variableId: "VariableID:3565:5794",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        200: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.200}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.200}",
              dark: "{primitives.color.charts.sequential.200}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-200",
              },
              variableId: "VariableID:3571:57285",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        300: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.300}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.300}",
              dark: "{primitives.color.charts.sequential.300}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-300",
              },
              variableId: "VariableID:3571:57286",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        400: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.400}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.400}",
              dark: "{primitives.color.charts.sequential.400}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-400",
              },
              variableId: "VariableID:3571:57287",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        500: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.500}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.500}",
              dark: "{primitives.color.charts.sequential.500}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-500",
              },
              variableId: "VariableID:3571:57288",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        600: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.600}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.600}",
              dark: "{primitives.color.charts.sequential.600}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-600",
              },
              variableId: "VariableID:3571:57289",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        700: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.700}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.700}",
              dark: "{primitives.color.charts.sequential.700}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-700",
              },
              variableId: "VariableID:3571:57290",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        800: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.800}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.800}",
              dark: "{primitives.color.charts.sequential.800}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-800",
              },
              variableId: "VariableID:3571:57291",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        900: {
          $type: "color",
          $value: "{primitives.color.charts.sequential.900}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.charts.sequential.900}",
              dark: "{primitives.color.charts.sequential.900}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-charts-sequential-900",
              },
              variableId: "VariableID:3571:57292",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
      status: {
        information: {
          subtle: {
            $type: "color",
            $value: "{primitives.color.status.blue.100}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.blue.100}",
                dark: "{primitives.color.status.blue.300}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-information-subtle",
                },
                variableId: "VariableID:4277:2512",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
          default: {
            $type: "color",
            $value: "{primitives.color.status.blue.300}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.blue.300}",
                dark: "{primitives.color.status.blue.200}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-information-default",
                },
                variableId: "VariableID:4277:2513",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
        },
        error: {
          subtle: {
            $type: "color",
            $value: "{primitives.color.status.red.100}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.red.100}",
                dark: "{primitives.color.status.red.300}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-error-subtle",
                },
                variableId: "VariableID:4277:2514",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
          default: {
            $type: "color",
            $value: "{primitives.color.status.red.200}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.red.200}",
                dark: "{primitives.color.status.red.200}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-error-default",
                },
                variableId: "VariableID:4277:2515",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
        },
        success: {
          subtle: {
            $type: "color",
            $value: "{primitives.color.status.green.100}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.green.100}",
                dark: "{primitives.color.status.green.400}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-success-subtle",
                },
                variableId: "VariableID:4277:2516",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
          default: {
            $type: "color",
            $value: "{primitives.color.status.green.300}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.green.300}",
                dark: "{primitives.color.status.green.200}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-success-default",
                },
                variableId: "VariableID:4277:2517",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
        },
        warning: {
          subtle: {
            $type: "color",
            $value: "{primitives.color.status.yellow.200}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.yellow.200}",
                dark: "{primitives.color.status.yellow.400}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-warning-subtle",
                },
                variableId: "VariableID:4277:2518",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
          default: {
            $type: "color",
            $value: "{primitives.color.status.yellow.300}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.yellow.300}",
                dark: "{primitives.color.status.yellow.300}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-warning-default",
                },
                variableId: "VariableID:4277:2519",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
        },
        caution: {
          subtle: {
            $type: "color",
            $value: "{primitives.color.status.orange.100}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.orange.100}",
                dark: "{primitives.color.status.orange.200}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-caution-subtle",
                },
                variableId: "VariableID:4277:2520",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
          default: {
            $type: "color",
            $value: "{primitives.color.status.orange.300}",
            $description: "",
            $extensions: {
              mode: {
                light: "{primitives.color.status.orange.300}",
                dark: "{primitives.color.status.orange.300}",
              },
              figma: {
                codeSyntax: {
                  WEB: "--axis-color-charts-status-caution-default",
                },
                variableId: "VariableID:4277:2521",
                collection: {
                  id: "VariableCollectionId:68:602",
                  name: "color",
                  defaultModeId: "68:2",
                },
              },
            },
          },
        },
      },
    },
    "box-shadow": {
      shadow: {
        popover: {
          $type: "color",
          $value: "{primitives.color.alpha.grey-8}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.alpha.grey-8}",
              dark: "{primitives.color.alpha.white-8}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-box-shadow-popover",
              },
              variableId: "VariableID:3520:1976",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
        table: {
          $type: "color",
          $value: "{primitives.color.alpha.grey-32}",
          $description: "",
          $extensions: {
            mode: {
              light: "{primitives.color.alpha.grey-32}",
              dark: "{primitives.color.alpha.white-32}",
            },
            figma: {
              codeSyntax: {
                WEB: "--axis-color-box-shadow-table",
              },
              variableId: "VariableID:3527:1943",
              collection: {
                id: "VariableCollectionId:68:602",
                name: "color",
                defaultModeId: "68:2",
              },
            },
          },
        },
      },
    },
    blanket: {
      $type: "color",
      $value: "{primitives.color.alpha.grey-32}",
      $description: "",
      $extensions: {
        mode: {
          light: "{primitives.color.alpha.grey-32}",
          dark: "{primitives.color.alpha.white-32}",
        },
        figma: {
          codeSyntax: {},
          variableId: "VariableID:3923:2139",
          collection: {
            id: "VariableCollectionId:68:602",
            name: "color",
            defaultModeId: "68:2",
          },
        },
      },
    },
  },
};

// Helper function to create a consistent key from an array of user answer IDs
function createAnswerPathKey(answerIdSequence) {
  return answerIdSequence.join("->"); // Using '->' as a separator
}

// Helper function to retrieve a nested value from an object using an array of keys (token path)
function getTokenByPath(obj, tokenPathArray) {
  if (!tokenPathArray || tokenPathArray.length === 0) return undefined;
  return tokenPathArray.reduce(
    (current, key) =>
      current && typeof current === "object" && key in current
        ? current[key]
        : undefined,
    obj
  );
}

// for HEX value only
// Helper function to resolve a value that might be an alias (e.g., "{path.to.token}")
// It aims to find the ultimate primitive $value (which should be a direct hex for colors).
function getResolvedHexValue(valueOrAlias, allTokens) {
  if (typeof valueOrAlias !== "string") {
    return String(valueOrAlias); // Or handle as an error/N.A.
  }
  if (!valueOrAlias.startsWith("{") || !valueOrAlias.endsWith("}")) {
    return valueOrAlias; // Not an alias, return as is
  }

  const aliasPathStr = valueOrAlias.substring(1, valueOrAlias.length - 1);
  const aliasPathArray = aliasPathStr.split(".");

  const aliasedTokenDef = getTokenByPath(allTokens, aliasPathArray);

  if (aliasedTokenDef && aliasedTokenDef.hasOwnProperty("$value")) {
    return getResolvedHexValue(aliasedTokenDef.$value, allTokens);
  }
  return "Alias Resolution Error";
}

//Map user answer paths to token reference paths (arrays of keys for designTokens)
const userAnswerPathToTokenPathMapping = {
  [createAnswerPathKey(["answer1-1", "tb-q1-a1", "tb-q2-a1"])]: [
    "color",
    "text",
    "default",
  ],
  [createAnswerPathKey(["answer1-1", "q1bt-1"])]: [
    "color",
    "text",
    "primary",
    "default",
  ],
  [createAnswerPathKey(["answer1-1", "q1bt-2"])]: [
    "color",
    "text",
    "secondary",
    "onlight",
  ],
  [createAnswerPathKey(["answer1-1", "q1bt-3", "qtafd-1"])]: [
    "color",
    "text",
    "accent",
    "link",
  ],
  [createAnswerPathKey(["answer1-6"])]: ["shadow", "depth", "medium"],
};

// STEP 3: Main function to get the final processed token details
function getTokenDetailsForUserPath(userAnswerIdSequence) {
  const userAnswerKey = createAnswerPathKey(userAnswerIdSequence);
  const tokenReferencePath = userAnswerPathToTokenPathMapping[userAnswerKey];

  if (!tokenReferencePath) {
    return {
      error: "No token reference path defined for this user answer sequence.",
      userAnswerPathAttempted: userAnswerKey,
    };
  }

  const rawTokenDefinition = getTokenByPath(designTokens, tokenReferencePath);

  if (!rawTokenDefinition) {
    return {
      error: "Token definition not found for reference path.",
      referencePathAttempted: tokenReferencePath.join("."),
    };
  }

  const figmaSyntax =
    rawTokenDefinition.$extensions?.figma?.codeSyntax?.WEB || "N/A";
  const joinedTokenPath = tokenReferencePath.join(".");

  let hexValue = "N/A"; // Default value

  if (rawTokenDefinition.$type === "color") {
    // Determine the value/alias for default/light mode (usually from $extensions.mode.light or $value)
    const defaultValueOrAlias =
      rawTokenDefinition.$extensions?.mode?.light || rawTokenDefinition.$value;
    hexValue = getResolvedHexValue(defaultValueOrAlias, designTokens);
  } else {
    // For non-color tokens, resolve the $value or a potential light mode value.
    const defaultValueOrAlias =
      rawTokenDefinition.$extensions?.mode?.light || rawTokenDefinition.$value;
    hexValue = getResolvedHexValue(defaultValueOrAlias, designTokens);
    // If it's still an error or not a direct value, use the raw $value if it's not an alias.
    if (
      hexValue === "Alias Resolution Error" &&
      rawTokenDefinition.$value &&
      !String(rawTokenDefinition.$value).startsWith("{")
    ) {
      hexValue = String(rawTokenDefinition.$value);
    }
  }

  return {
    figmaSyntax: figmaSyntax,
    hexValue: hexValue, // Changed from hexLight/hexDark
    tokenPath: joinedTokenPath,
    // rawDefinition: rawTokenDefinition // Optionally include for debugging
  };
}
