from flask import render_template, Flask, request, redirect, url_for, send_file
from werkzeug.utils import secure_filename
import os
import time
import zipfile
import io
import tempfile
from glob import glob


app = Flask(__name__)



@app.route('/')


def index(user=None):
    global username
    username = request.args.get('user')
    return render_template('index.html', user=username)


@app.route("/upload/", methods=['POST', 'GET'])

def upload(user=None):
    if request.method == 'GET':
        return redirect(url_for('index'))
        #return render_template('index.html')
    else:

        f = request.files.getlist("file")
        if os.path.isdir(os.path.join(os.getcwd(), username)):
            #files = flask.request.files.getlist("file")
            for file in f:
                file.save(os.path.join(os.getcwd(), username, secure_filename(file.filename)))
            #f.save(os.path.join(os.getcwd(), username, secure_filename(f.filename)))
        else:
            os.makedirs(username)
            for file in f:
                file.save(os.path.join(os.getcwd(), username, secure_filename(file.filename)))
            #f.save(os.path.join(os.getcwd(), username, secure_filename(f.filename)))
        return render_template('index.html');

    
@app.route("/pin/")

def pin():
    return render_template("/pin/index.html")
    
@app.route("/user/")

def user():
    return render_template("/user/index.html")

@app.route("/dir/")

def dir(user=None):
    try:
        cleaned_contents = []
        contents = os.listdir(os.path.join(os.getcwd(), request.args.get('user')))
        for i in range(len(contents)):
            cleaned_contents.append('<a style="color: #FAAA8D;" href="/download/?user='+request.args.get('user')+"&file="+contents[i]+'">'+contents[i]+'</a>')
        items = "<br><li>".join(cleaned_contents)
        #print(items)
        return """<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css"/><script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script><style>.container{width: 100%; height: 100%;}.text{text-align: center; padding: 100px 50px;}</style><style>body{ touch-action: manipulation;} html{ overflow: hidden;}</style><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"><div class="container"><h1 id="yourlist" style="font-size: 60; font-family: 'Ubuntu', sans-serif;">"""+request.args.get('user').capitalize()+"""'s drive</h1><button style='border-radius: 10px; background-color: #000; color: #fff; border: #000; width: 7rem; height: 2rem;' onclick='location.href = "/download/?user=bob&file=bulk"'>Download all</button><ul style="font-size: 22; font-family: 'Ubuntu', sans-serif;"><li>"""+items+"""</li></ul></div><script>window.onload = new SimpleBar(document.getElementsByClassName('container')[0]);</script>"""
    except:
        return """<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script><link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css"/><script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script><style>.container{width: 100%; height: 100%;}.text{text-align: center; padding: 100px 50px;}</style><style>body{ touch-action: manipulation;} html{ overflow: hidden;}</style><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"><div class="container"><h1 id="yourlist" style="font-size: 60; font-family: 'Ubuntu', sans-serif;">"""+request.args.get('user').capitalize()+"""'s drive</h1><button style='border-radius: 10px; background-color: #000; color: #fff; border: #000; width: 7rem; height: 2rem;' onclick='location.href = "/download/?user=bob&file=bulk"'>Download all</button><ul style="font-size: 22; font-family: 'Ubuntu', sans-serif;"><li>Your drive is empty!</li></ul></div><script>window.onload = new SimpleBar(document.getElementsByClassName('container')[0]);</script>"""
    



@app.route('/download/')
def downloadFile(user=None, file=None):

            if request.args.get("file") == "bulk":
                target = request.args.get("user")

                stream = io.BytesIO()
                with zipfile.ZipFile(stream, 'w') as zf:
                    for file in glob(os.path.join(target, '*.*')):
                        zf.write(file, os.path.basename(file))
                stream.seek(0)

                return send_file(
                    stream,
                    as_attachment=True,
                    download_name='archive_'+str(int(time.time()))+'.zip'
                )

            else:
                if "." not in request.args.get('file'):
                    return """<style>body{ touch-action: manipulation;}</style><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"><h1 style="font-size: 55px; font-family: 'Ubuntu', sans-serif;">Sorry, you cannot download folders! :(</h1><button style='background-color: #000; color: #fff; border-radius: 10px; border: #000; width: 6rem; height: 2.25rem;' onclick="history.back()">Go back</button>"""
                path = os.path.join(os.getcwd(), request.args.get('user'), request.args.get('file'))
                return send_file(path, as_attachment=True)
            """
            fx = open(path, "rb")
            path_file = fx.read()
            
            fx.close()
            time.sleep(1)
            os.remove(os.path.join(os.getcwd(), request.args.get('user'), request.args.get('file')))
            """
            
            
            
            


    
    

if __name__ == "__main__":
    app.run()
