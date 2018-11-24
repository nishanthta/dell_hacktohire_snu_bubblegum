import csv 
import pandas
import codecs


filename = "2.csv"
df = pandas.read_csv(filename)
sub_str = "Electr"
sub_str1 = "electr"
i=0
rows =[]

with open(filename, "rb") as f:
    reader = csv.reader(codecs.iterdecode(f, 'utf-8'))
    for row in reader:
        for l in row:
            if (sub_str in l) or (sub_str1 in l) :
                i=i+1
                rows.append(l)

print(i)



    