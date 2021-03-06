import requests 
from bs4 import BeautifulSoup
import urllib
import pandas as pd

class HTMLTableParser: 

    def parse_html_table(self, table): 
        n_columns = 0
        n_rows = 0
        column_names =[]

        for row in table.find_all('tr'):
            td_tags = row.find_all('td')
            if len(td_tags) > 0:
                n_rows+=1
                if n_columns == 0:
                                    # Set the number of columns for our table
                    n_columns = len(td_tags)
                        
        # Handle column names if we find them
            th_tags = row.find_all('th') 
            if len(th_tags) > 0 and len(column_names) == 0:
                for th in th_tags:
                    column_names.append(th.get_text())
    
            
        if len(column_names) > 0 and len(column_names) != n_columns:
            raise Exception("Column titles do not match the number of columns")
    
        columns = column_names if len(column_names) > 0 else range(0,n_columns)
        df = pd.DataFrame(columns = columns, index= range(0,n_rows))
        row_marker = 0
        for row in table.find_all('tr'):
            column_marker = 0
            columns = row.find_all('td')
            for column in columns:
                df.iat[row_marker,column_marker] = column.get_text()
                column_marker += 1
            if len(columns) > 0:
                row_marker += 1
        return df 

    def parse_url(self, url):
        website_url = requests.get(url).text
        soup = BeautifulSoup(website_url, 'html.parser')
        table = soup.find_all('table')[14]
        print(type(table))
        return (self.parse_html_table(table))        

for i in range(5,5):
    url ="https://eprocure.gov.in/eprocure/app?component=%24TablePages.linkPage&page=FrontEndLatestActiveTendersOrgwise&service=direct&session=T&sp=AFrontEndLatestActiveTendersOrgwise%2Ctable&sp={pagenum}".format(pagenum=i)
    hp = HTMLTableParser()
    table = hp.parse_url(url) # Grabbing the table from the tuple
    table.to_csv('2.csv', mode='a', header=False)

