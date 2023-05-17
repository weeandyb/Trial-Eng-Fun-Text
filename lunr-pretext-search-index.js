var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "About this Book",
  "body": " About this Book  This is an attempt to produce an online textbook for DE4101 Engineering Fundamentals that be used by all students wherever they are studying in New Zealand.  The layout of this book is based upon the learning outcomes for the course in the NZDE National Curriculum Document available at    License  This book is licensed under a Creative Commons Attribution-Non Commercial-Share Alike 4.0 International License . You are free to download, use, and print this work as you wish as long as your use is not primarily intended for or directed toward commercial advantage or monetary compensation. You can also modify the text as much as you like (for example to create a custom edition for your students), as long as you attribute the parts of the book you use to the authors.  All the GeoGebra content found in the book is licensed under a Creative Commons Attribution-Non Commercial-Share Alike 3.0 International License with more detailed information found at .   "
},
{
  "id": "p-1",
  "level": "2",
  "url": "preface.html#p-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "DE4101 Engineering Fundamentals "
},
{
  "id": "p-2",
  "level": "2",
  "url": "preface.html#p-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "NZDE National Curriculum Document "
},
{
  "id": "Simple_Force_Systems",
  "level": "1",
  "url": "Simple_Force_Systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Solve simple force systems",
  "body": " Solve simple force systems    This section covers learning outcome 1.1 Solve simple force systems.     1.1.1  Introduction, engineering terms, SI Units, fundamental units, derived units, metric prefixes, conversions of units, gravity. Sources of errors in measurement.    1.1.2  Vector addition (Graphical and Mathematical) Resultant and equilibrant vectors.    1.1.3  Calculate the components of a force.    1.1.4  Free body diagrams (coplanar, concurrent by Graphical and mathematical solutions.    1.1.5  Define and calculate the moment of a force.    1.1.6  Calculate the support reactions for simply supported and cantilever beams with UDL and point loads (co-planer).      Introduction, engineering terms, SI Units, fundamental units, derived units, metric prefixes, conversions of units, gravity. Sources of errors in measurement.   Units  In engineering, we often try to answer questions such as How long? , How fast? , How hot? and many others. Answers to these questions require understanding physical quantities and a common basis of measurement involving a standardised unit system.  This course uses the metric system based on the International System of Units or SI , abbreviated from the French Système International (d'unités) . The system uses seven base units based on quantities assumed to be mutually independent. shows the S.I. base units.   S.I. Base Units    Quantity  Unit  Symbol    length or distance  metre  m    mass  kilogram  kg    time  second  s    electric current  ampere (amp)  A    temperature  kelvin  K    luminous intensity  candela  cd    amount of substance  mole  mol     Although the base unit of temperature is the kelvin, the degree Celsius unit (°C) is usually used. One degree Celsius is equal in magnitude to one kelvin, but the scales start at different points. This is illustrated in below.     Comparison of Kelvin and Celsius Scales    All other quantities, called derived quantities, are defined in terms of the seven base quantities via a system of quantity equations. The main derived quantities used in the Engineering Fundamentals course are shown in below.  Several quantities have special names and symbols. These may be included in other SI-derived units names and symbols.   S.I. Derived Units Used in Engineering Fundamentals    Quantity  Unit  Symbol    area  square metre     volume  cubic metre     velocity, speed  metre per second     acceleration  metre per second per second     momentum  kilogram metre per second     force, weight  newton  N    work, energy, heat  joule  J    power  watt  W    moment, torque  newton-metre     pressure, stress  pascal  Pa    electric charge  coulomb  C    electric potential, voltage, EMF  volt  V    resistance, impedance  ohm     frequency  hertz  Hz    capacitance used in DE4401 Electrical Principles and DE5304 Electrical Fundamentals  farad  F    inductance used in DE4401 Electrical Principles and DE5304 Electrical Fundamentals  henry  H    density  kilogram per cubic metre         It is sometimes not clear how units with special names are derived units.  The derivation for some of the SI units with special names is shown below in .   Derivation Of Some SI Units With Special Names    Name (Symbol)  Deriving Formula  In Terms Of Other SI Units    newton (N)      pascal (Pa)      joule (J)      watt (W)         > There are also some non-SI metric units in common use:  The hectare (symbol: ha) is a non-SI metric unit of area equal to a square with 100-metre sides ( ), or , and is primarily used in the measurement of land.     The tonne (symbol: t) is a non-SI metric unit of mass equal to .     The litre (symbol: L or l) is a non-SI metric unit of volume or capacity equal to , or .       Metric Prefixes   S.I. Metric Prefixes    Factor  Name  Symbol  Factor  Name  Symbol     yotta  Y   deci  d     zeta  Z   centi  c     exa  E   milli  m     peta  P   micro      tera  T   nano  n     giga  G   pico  p     mega  M   micro  n     kilo  k   atto  a     hecto  h   zepto  z     deca  da   yocto  y        Vector addition (Graphical and Mathematical) Resultant and equilibrant vectors.  Quantities we measure in engineering can be divided into scalars and vectors.  A quantity with magnitude (size) but no particular direction is described as a scalar . Scalars can be described by a positive or negative number or even zero. Scalar quantities follow the usual laws of algebra, and most scalar quantities have units. Scalar quantities include distance, area, volume, mass, density, pressure, temperature, energy, work, speed, time, and power. Scalar quantities change when their magnitude changes.  A quantity with magnitude that acts in a particular direction is described as a vector . Calculations involving vectors must always consider the direction of each term and follow the rules of vector algebra. Vector quantities include displacement, velocity, acceleration, momentum, and force. Vector quantities change when: their magnitude changes, their direction changes or their magnitude and direction both change.   Representing Vectors    Vectors are represented by arrows. The arrow's length represents the vector's magnitude, the line's angle, and the way the arrowhead points indicates the direction.  The starting point of the vector is known as the tail , and the endpoint is known as the head . The tail also indicates the point of application of the vector. The head and tail of a vector define its line of action .  You may want to think of the line of action as an invisible string along which a vector can slide. Sliding a vector along its line of action does not change its magnitude or its direction, and can be useful when solving vector problems.    Representation of a Vector  Figure copied from Figure 2.1.1 in Engineering Statics: Open and Interactive ,     To draw a vector:  Decide on a point that will be your starting point.  Pick a scale and determine the required length of the line.  Determine the specified direction and draw the line.  Add the arrowhead to indicate the direction.      Draw a scale diagram to depict a force of pushing horizontally to the right.          Decide on a point that will be your starting point.  Pick a starting point, .    Pick a scale and determine the required length of the line  Let the scale be , so the length of the arrow is .    Determine the specified direction and draw the line  Draw a horizontal line through point . Locate point , to the right of . Draw the vector from point to point .    Add the arrowhead to indicate the direction  Add the arrowhead to show the vector direction is to the right.          Draw a scale diagram to depict a force of pulling down to the left at an angle of 30° to the vertical.          Decide on a point that will be your starting point.  Pick a starting point, .    Pick a scale and determine the required length of the line  Let the scale be , so the length of the arrow is .    Determine the specified direction and draw the line  Draw a line through point down to the left at an angle of 30° to the vertical. Locate point , along the line from . Draw the vector from point to point .    Add the arrowhead to indicate the direction  Add the arrowhead to show the vector direction is down and to the left.          Exercises     "
},
{
  "id": "outcomes-2",
  "level": "2",
  "url": "Simple_Force_Systems.html#outcomes-2",
  "type": "Outcomes",
  "number": "1.1",
  "title": "",
  "body": "  This section covers learning outcome 1.1 Solve simple force systems.     1.1.1  Introduction, engineering terms, SI Units, fundamental units, derived units, metric prefixes, conversions of units, gravity. Sources of errors in measurement.    1.1.2  Vector addition (Graphical and Mathematical) Resultant and equilibrant vectors.    1.1.3  Calculate the components of a force.    1.1.4  Free body diagrams (coplanar, concurrent by Graphical and mathematical solutions.    1.1.5  Define and calculate the moment of a force.    1.1.6  Calculate the support reactions for simply supported and cantilever beams with UDL and point loads (co-planer).    "
},
{
  "id": "p-16",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "International System of Units SI Système International (d'unités) "
},
{
  "id": "units_table",
  "level": "2",
  "url": "Simple_Force_Systems.html#units_table",
  "type": "Table",
  "number": "1.1.1",
  "title": "S.I. Base Units",
  "body": " S.I. Base Units    Quantity  Unit  Symbol    length or distance  metre  m    mass  kilogram  kg    time  second  s    electric current  ampere (amp)  A    temperature  kelvin  K    luminous intensity  candela  cd    amount of substance  mole  mol    "
},
{
  "id": "fig-temp-scales",
  "level": "2",
  "url": "Simple_Force_Systems.html#fig-temp-scales",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Comparison of Kelvin and Celsius Scales   "
},
{
  "id": "derived_units_table",
  "level": "2",
  "url": "Simple_Force_Systems.html#derived_units_table",
  "type": "Table",
  "number": "1.1.3",
  "title": "S.I. Derived Units Used in Engineering Fundamentals",
  "body": " S.I. Derived Units Used in Engineering Fundamentals    Quantity  Unit  Symbol    area  square metre     volume  cubic metre     velocity, speed  metre per second     acceleration  metre per second per second     momentum  kilogram metre per second     force, weight  newton  N    work, energy, heat  joule  J    power  watt  W    moment, torque  newton-metre     pressure, stress  pascal  Pa    electric charge  coulomb  C    electric potential, voltage, EMF  volt  V    resistance, impedance  ohm     frequency  hertz  Hz    capacitance used in DE4401 Electrical Principles and DE5304 Electrical Fundamentals  farad  F    inductance used in DE4401 Electrical Principles and DE5304 Electrical Fundamentals  henry  H    density  kilogram per cubic metre     "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "Simple_Force_Systems.html#warning-1",
  "type": "Warning",
  "number": "1.1.4",
  "title": "",
  "body": "   It is sometimes not clear how units with special names are derived units.  The derivation for some of the SI units with special names is shown below in .   Derivation Of Some SI Units With Special Names    Name (Symbol)  Deriving Formula  In Terms Of Other SI Units    newton (N)      pascal (Pa)      joule (J)      watt (W)         "
},
{
  "id": "p-28",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hectare "
},
{
  "id": "p-30",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tonne "
},
{
  "id": "p-32",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "litre "
},
{
  "id": "prefixes_table",
  "level": "2",
  "url": "Simple_Force_Systems.html#prefixes_table",
  "type": "Table",
  "number": "1.1.6",
  "title": "S.I. Metric Prefixes",
  "body": " S.I. Metric Prefixes    Factor  Name  Symbol  Factor  Name  Symbol     yotta  Y   deci  d     zeta  Z   centi  c     exa  E   milli  m     peta  P   micro      tera  T   nano  n     giga  G   pico  p     mega  M   micro  n     kilo  k   atto  a     hecto  h   zepto  z     deca  da   yocto  y    "
},
{
  "id": "p-35",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar "
},
{
  "id": "p-36",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-36",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "p-38",
  "level": "2",
  "url": "Simple_Force_Systems.html#p-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tail head point of application line of action "
},
{
  "id": "fig-vector",
  "level": "2",
  "url": "Simple_Force_Systems.html#fig-vector",
  "type": "Figure",
  "number": "1.1.7",
  "title": "",
  "body": " Representation of a Vector  Figure copied from Figure 2.1.1 in Engineering Statics: Open and Interactive ,   "
},
{
  "id": "example-1",
  "level": "2",
  "url": "Simple_Force_Systems.html#example-1",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": "  Draw a scale diagram to depict a force of pushing horizontally to the right.          Decide on a point that will be your starting point.  Pick a starting point, .    Pick a scale and determine the required length of the line  Let the scale be , so the length of the arrow is .    Determine the specified direction and draw the line  Draw a horizontal line through point . Locate point , to the right of . Draw the vector from point to point .    Add the arrowhead to indicate the direction  Add the arrowhead to show the vector direction is to the right.       "
},
{
  "id": "example-2",
  "level": "2",
  "url": "Simple_Force_Systems.html#example-2",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Draw a scale diagram to depict a force of pulling down to the left at an angle of 30° to the vertical.          Decide on a point that will be your starting point.  Pick a starting point, .    Pick a scale and determine the required length of the line  Let the scale be , so the length of the arrow is .    Determine the specified direction and draw the line  Draw a line through point down to the left at an angle of 30° to the vertical. Locate point , along the line from . Draw the vector from point to point .    Add the arrowhead to indicate the direction  Add the arrowhead to show the vector direction is down and to the left.       "
},
{
  "id": "Centroids",
  "level": "1",
  "url": "Centroids.html",
  "type": "Section",
  "number": "1.2",
  "title": "Calculate the positions of centroids and centres of gravity",
  "body": " Calculate the positions of centroids and centres of gravity  "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
