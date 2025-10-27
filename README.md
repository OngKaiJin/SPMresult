# SPMresult
Scraping files in the website of SPM result. 
> Tested on https://myresultspm.moe.gov.my and https://myresultspmslip.moe.gov.my in April 2025.
## Usage
### Get PDFs
In console, run [validify.js](validify.js) to mark if the response is 200 as it runs through each submission. Modify ranges of ```angka``` and ```ic```. See samples:
* [list MA303A(0-60) 04 (0-600)](examples/list&20MA303A(0-60)%2004%20(0-600).txt)
* [list MA303A(61-120) 04 (1-599)](examples/list%20MA303A(61-120)%2004%20(1-599).txt)

In console, run [validifyspecific.js](validifyspecific.js) which runs through specific ```angka```. Modify values of ```angka``` and ranges of ```ic``` and ```ic2```. See samples:
* [list MA303A(remaining) (1-10,14) (1-1999)](examples/list%20MA303A(remaining)%20(1-10,14)%20(1-1999).txt)
* [list MA303A(104) (10) (2001-3999)](examples/list%20MA303A(104)%20(10)%20(2001-3999).txt)
* [list MA303A(113) (0-9) (1-1999)](examples/list%20MA303A(113)%20(0-9)%20(1-1999).txt)

Then, manually copy ```status-code:200``` URLs by filtering down in network tab, and save them in a or several files.
### Download PDFs
Launch terminal at desired folder path.

In terminal, run the below to download PDFs.
```command
for /f usebackq %i ("last MA303(0-60) 04 (0-600).txt") do curl %i -O -H "Referer: https://myresultspm.moe.gov.my" -H "User-Agent:" --ssl-no-revoke
```
# Consignment
* https://archive.org/details/SPM-2024-MA303
