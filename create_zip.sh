cd ..
rm -rf mindload-tmp
git clone git@github.com:xperiencr/mindload.git mindload-tmp
[ -e mindload.zip ] && rm mindload.zip
zip mindload.zip mindload-tmp
