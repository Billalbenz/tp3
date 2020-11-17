#include "mainwindow.h"


#include<QComboBox>
#include<QGridLayout>
#include<QGroupBox>
#include<QLabel>
#include<QLineEdit>
#include<QPushButton>


Window::Window(QWidget *parent)
: QWidget(parent)
{



//! [1]
QGroupBox *echoGroup = new QGroupBox(tr("Veuillez vous connectez !"));

QLabel *echoLabel = new QLabel(tr("ID:"));
QComboBox *echoComboBox = new QComboBox;
echoComboBox->addItem(tr("Normal"));
echoComboBox->addItem(tr("Masquer"));
QPushButton *bouton1 = new QPushButton("Se connecter");
//
QLabel *echoLabel2 = new QLabel(tr("MDP:"));
QComboBox *echoComboBox2 = new QComboBox;
echoComboBox2->addItem(tr("Normal"));
echoComboBox2->addItem(tr("Masquer"));



//
echoLineEdit = new QLineEdit;
echoLineEdit->setPlaceholderText("Entrer votre ID");
echoLineEdit2 = new QLineEdit;
echoLineEdit2->setPlaceholderText("Entrer votre MDP");
//! [1]

//! [2]
QGridLayout *echoLayout = new QGridLayout;
echoLayout->addWidget(echoLabel, 0, 0);
echoLayout->addWidget(echoLabel2, 4, 0);
echoLayout->addWidget(bouton1, 10, 0);
echoLayout->addWidget(echoComboBox, 1, 0);
echoLayout->addWidget(echoLineEdit, 2, 0, 1, 1);
echoLayout->addWidget(echoLineEdit2, 6, 0, 1, 1);
echoLayout->addWidget(echoComboBox2, 5, 0);
echoGroup->setLayout(echoLayout);
//! [2]


//! [3]
QGridLayout *layout = new QGridLayout;
layout->addWidget(echoGroup, 0, 0);// 0,0 définit la position de notre layout
setLayout(layout);

setWindowTitle(tr("Account"));// définit le titre de l'application
    connect(echoComboBox, QOverload<int>::of(&QComboBox::activated),this, &Window::echoChanged);
    connect(echoComboBox2, QOverload<int>::of(&QComboBox::activated),this, &Window::echoChanged2);

}
//! [3]


//! [4]
void Window::echoChanged(int index)
{
switch (index) {
case 0:
echoLineEdit->setEchoMode(QLineEdit::Normal);

break;
case 1:
echoLineEdit->setEchoMode(QLineEdit::Password);

break;

}


}
void Window::echoChanged2(int index)
{
switch (index) {
case 0:
echoLineEdit2->setEchoMode(QLineEdit::Normal);

break;
case 1:
echoLineEdit2->setEchoMode(QLineEdit::Password);

break;

}


}
