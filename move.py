import shutil, os, glob

def moveAllFilesinDir(srcDir, dstDir):
# Check if both the are directories

    print('Moved files from unzipped directory to root...')
    if os.path.isdir(srcDir) and os.path.isdir(dstDir) :
    # Iterate over all the files in source directory
        for filePath in glob.glob(srcDir + '/*'):
        # Move each file to destination Directory
            shutil.move(filePath, dstDir);
    else:
        print("[ERROR!] Unable to move files.")

sourceDir = './1132-Help_Center-html5_-Help_Center.zip/out'
destDir =  '.'

moveAllFilesinDir(sourceDir,destDir)
