# [Total Pressure Calculation](https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a)

## Description

Given the molecular mass of two molecules M1M_1M1​ and M2M_2M2​, their masses present m1m_1m1​ and m2m_2m2​ in a vessel of volume VVV at a specific temperature TTT, find the total pressure Ptotal​ exerted by the molecules. Formula to calculate the pressure is:

Ptotal​ = (M1/​m1​ ​+ M2/​m2​​) RT ​/ V

### Input

Six values :

- M1M​, M2M​: molar masses of both gases, in  g⋅mol−1
- m1 and m2m​: present mass of both gases, in grams (g)
- V: volume of the vessel, in  dm^3
- T: temperature, in °C degree

### Output

One value: Ptotal in units of atm.

### Notes

Remember: Temperature is given in Celsius while SI unit is Kelvin (K). 0°C = 273.15K

The gas constant R = 0.082dm3 ⋅ atm ⋅ K−1 ⋅ mol−1

## My Solution

**JavaScript**

```js
const solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const tempKelvin = temp + 273.15;
  const R = 0.082;
  return ((givenMass1 / molarMass1 + givenMass2 / molarMass2) * R * tempKelvin) / volume;
};
```

**Python**

```py
def solution(molar_mass1, molar_mass2, given_mass1, given_mass2, volume, temp) :
    temp_kelvin = temp + 273.15
    R = 0.082
    return (given_mass1 / molar_mass1 + given_mass2 / molar_mass2) * R * temp_kelvin / volume
```
