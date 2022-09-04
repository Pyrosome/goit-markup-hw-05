{\rtf1\ansi\ansicpg1252\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red43\green44\blue39;\red244\green246\blue249;\red0\green0\blue141;
\red46\green158\blue154;\red203\green35\blue57;\red217\green0\blue89;}
{\*\expandedcolortbl;;\cssrgb\c22353\c22745\c20392;\cssrgb\c96471\c97255\c98039;\cssrgb\c0\c0\c62353;
\cssrgb\c21176\c67451\c66667;\cssrgb\c84314\c22745\c28627;\cssrgb\c89020\c6667\c42353;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs30\fsmilli15200 \cf2 \cb3 \expnd0\expndtw0\kerning0
(() => \{\cb1 \
\cb3   \cf4 const\cf2  refs = \{\cb1 \
\cb3     \cf5 openModalBtn\cf2 : \cf5 document\cf2 .\cf6 querySelector\cf2 (\cf7 "[data-modal-open]"\cf2 ),\cb1 \
\cb3     \cf5 closeModalBtn\cf2 : \cf5 document\cf2 .\cf6 querySelector\cf2 (\cf7 "[data-modal-close]"\cf2 ),\cb1 \
\cb3     \cf5 modal\cf2 : \cf5 document\cf2 .\cf6 querySelector\cf2 (\cf7 "[data-modal]"\cf2 ),\cb1 \
\cb3   \};\cb1 \
\
\cb3   refs.openModalBtn.\cf6 addEventListener\cf2 (\cf7 "click"\cf2 , toggleModal);\cb1 \
\cb3   refs.closeModalBtn.\cf6 addEventListener\cf2 (\cf7 "click"\cf2 , toggleModal);\cb1 \
\
\cb3   \cf4 function\cf2  \cf6 toggleModal\cf2 () \{\cb1 \
\cb3     refs.modal.classList.\cf6 toggle\cf2 (\cf7 "is-hidden"\cf2 );\cb1 \
\cb3   \}\cb1 \
\cb3 \})();}