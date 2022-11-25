# Replace {folder-name} with the output name from the .zip file generated by Paligo.
from zipfile import ZipFile
import fnmatch
import re, os
import glob

def main():
    
    print('Unzipped files...')
    # Create a ZipFile Object and load sample.zip in it
    with ZipFile('../1132-Help_Center-html5_-Help_Center.zip') as zipObj:
       # Extract all the contents of zip file in current directory
       zipObj.extractall()


if __name__ == '__main__':
   main()

else:
    print('[ERROR!] Unable to unzip files.')


# Version 1 of unzip-util, see https://github.com/johnapaz/unzip-util for details.
