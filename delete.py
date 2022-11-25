import os, glob

try:
    os.rmdir('../1132-Help_Center-html5_-Help_Center.zip/out')
    os.rmdir('../1132-Help_Center-html5_-Help_Center.zip')
    os.remove('../1132-Help_Center-html5_-Help_Center.zip_-Upload_to_GitHub.zip')
    print('Deleted unneeded sub-directories...')
    
except:
   print('[ERROR!] Unable to delete files.')
