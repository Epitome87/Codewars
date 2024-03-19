# [Let's Recycle](https://www.codewars.com/kata/5b6db1acb118141f6b000060)

## Description

**Task**

You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

**Notes**

- The bins should come in the same order as the materials listed above
- All bins should be listed in the output, even if some of them are empty
- If an object is made of two materials, its type should be listed in both of the respective bins
- The order of the type's in each bin should be the same as the order of their respective objects was in the input list

**Example**

```js
input = [
  { type: 'rotten apples', material: 'organic' },
  { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
  { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
  { type: 'amazon box', material: 'paper' },
  { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' },
];

output = [
  ['wine bottle', 'amazon box', 'beer bottle'],
  ['wine bottle', 'beer bottle'],
  ['rotten apples', 'out of date yogurt'],
  ['out of date yogurt'],
];
```

## My Solution

**JavaScript**

```js
const recycle = (array) => {
  const types = { paper: 0, glass: 1, organic: 2, plastic: 3 };

  return array.reduce(
    (acc, { type, material, secondMaterial }) => {
      acc[types[material]].push(type);
      if (secondMaterial) acc[types[secondMaterial]].push(type);
      return acc;
    },
    [[], [], [], []]
  );
};
```

**Python**

```py
def recycle(objects):
    types = { "paper": 0, "glass": 1, "organic": 2, "plastic": 3 }
    result = ([], [], [], [])

    for obj in objects:
        result[types[obj["material"]]].append(obj["type"])
        if "secondMaterial" in obj:
            result[types[obj["secondMaterial"]]].append(obj["type"])

    return result
```

### User Solution

**JavaScript**

```js
const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

function recycle(objects) {
  return recyclerMaterials.map((m) =>
    objects.filter((o) => o.material == m || o.secondMaterial == m).map((o) => o.type)
  );
}
```

**Python**

```py
def recycle(a):
    bins = {"paper":[], "glass":[], "organic":[], "plastic":[]}
    for i in a:
        bins[i["material"]].append(i["type"])
        if "secondMaterial" in i:
            bins[i["secondMaterial"]].append(i["type"])
    return tuple(bins.values())
```
