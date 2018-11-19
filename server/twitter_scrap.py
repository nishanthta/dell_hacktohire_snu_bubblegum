import requests
import lxml.html as lh
import pandas as pd
import jsonpickle

url =("https://eprocure.gov.in/eprocure/app?page=FrontEndLatestActiveTendersOrgwise&service=page&org=")


#Create a handle, page, to handle the contents of the website
page = requests.get(url)
#Store the contents of the website under doc
doc = lh.fromstring(page.content)
#Parse data that are stored between <tr>..</tr> of HTML
tr_elements = doc.xpath('//tr')
print(tr_elements)

list = []

col=[]
i=0
for T in tr_elements:
    if i == 0:
        print(jsonpickle.encode(tr_elements[i]))
    if len(T)!=6:
        print('Triggered')
        del tr_elements[i]
    i = i + 1
    
for T in tr_elements:
    print(len(T))

print(list)