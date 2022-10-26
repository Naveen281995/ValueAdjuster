# ValueAdjuster

Auto Value Adjuster

This component helps to adjust(add/sub) the given number value by button clicks. Add/Sub operator value can be adjusted in component properties.


• If you want to use the control without any customization, then just import the zip file using below path.

o "Solution/bin/Debug/Solution.zip"

• If you want to make any changes in the control, then perform the following steps after you have completed making your changes in the code:

o Delete all the content in the "ValueAdjuster-master/Solution" folder.

o Open the terminal in the Visual Studio Code. (Ctrl + `)

o Write the following commands:

 npm install

 npm run build

o Go inside the "ValueAdjuster/Solution" folder by writing the following command:

 cd .\Solution\

o Now write the following command:

 pac solution init --publisher-name ValueAdjusterPCF --publisher-prefix valadj

 pac solution add-reference --path ..\

 dotnet build

o By implementing the above-mentioned steps, a new zip file will be generated that can be used for importing your newly customized solution.
