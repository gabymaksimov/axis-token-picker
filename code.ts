figma.showUI(__html__, {
  width: 600,
  height: 700,
});

console.log(
  figma.variables.getLocalVariableCollectionsAsync().then((tokens) => {
    console.log({ tokens });
  })
);
