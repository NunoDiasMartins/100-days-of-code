# Importing the PIL library
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import csv
import random, string
import copy
import os


__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

def build_fullpath(name):
    return os.path.join(__location__, name)

# Open an Image
img = Image.open(os.path.join(__location__,'savethedate.jpg'))
font = ImageFont.truetype("arial.ttf", 50)
position = (1700, 1950)
super = [['Name', 'Code', 'file name']]

# read the CSV file
with open(build_fullpath('names.txt')) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    os.chdir(build_fullpath('./generatedInvites'))
    line_count = 0
    for row in csv_reader:
        copy_img = copy.deepcopy(img);
        manipulation_image = ImageDraw.Draw(copy_img)

        # Generates the random code
        generatedCode = ''.join(random.choice(string.ascii_uppercase  + string.digits) for _ in range(8))
        # Add Text to an image
        manipulation_image.text(position, generatedCode, fill=(0, 0, 0), font=font)

        # Save the edited image
        file_name = row[0].replace(" ", "")+ '_savethedate.jpg';
        super.append([row[0],generatedCode, file_name] )
        copy_img.save(file_name, 'JPEG')
        line_count += 1
    print(f'Processed {line_count} images.')

#write the new SCV with the names, codes and file names
with open(build_fullpath('names_and_codes.csv'), mode='w', newline='') as new_file:
    csv_write = csv.writer(new_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    csv_write.writerows(super)

