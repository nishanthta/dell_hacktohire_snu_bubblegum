import csv 
import pandas
import codecs


filename = "ua.csv"
df = pandas.read_csv(filename)
sub_str = "tech"
sub_str1 = "Tech"
i=0
Rows = []

with open(filename, "rb") as f:
    reader = csv.reader(codecs.iterdecode(f, 'utf-8'))
    for row in reader:
        for l in row:
            if (sub_str in l) or (sub_str1 in l) :
                i=i+1
                Rows.append(l)

print(i)

