#include "mainwindow.h"
#include <QComboBox>
#include <QGridLayout>
#include <QGroupBox>
#include <QLabel>
#include <QLineEdit>
#include <QMessageBox>
#include <QInputDialog>
#include <QPushButton>
#include <QCheckBox>
#include <QString>

Window::Window(QWidget *parent): QWidget(parent)
 {
    QGroupBox *echoGroup = new QGroupBox(tr("Authentification"));
    QLabel *echoLabel = new QLabel(tr("Identifiant:"));
    QCheckBox *CheckBox = new QCheckBox("Masquer");
    QCheckBox *CheckBox2 = new QCheckBox("Masquer");



    QLabel *echoLabel2 = new QLabel(tr("Mot de passe:"));

    echoLineEdit = new QLineEdit;
    echoLineEdit->setPlaceholderText("Entrer votre identifiant.");

    echoLineEdit2 = new QLineEdit;
    echoLineEdit2->setPlaceholderText("Entrer votre mot de passe.");

    //! [2]
    QGridLayout *echoLayout = new QGridLayout;
    echoLayout->addWidget(echoLabel, 0, 0);
    echoLayout->addWidget(echoLabel2, 3, 0);

    echoLayout->addWidget(echoLineEdit, 2, 0, 1, 1);
    echoLayout->addWidget(echoLineEdit2, 5, 0, 1, 1);

    echoLayout->addWidget(CheckBox, 1, 0);
    echoLayout->addWidget(CheckBox2, 4, 0);

    echoLayout->addWidget(button1, 7, 0, 1, 1);
    echoLayout->addWidget(button2, 1, 5);
    echoLayout->addWidget(button3, 1, 6);
    echoLayout->addWidget(button4, 1, 7);
    echoLayout->addWidget(button5, 2, 5);
    echoLayout->addWidget(button6, 2, 6);
    echoLayout->addWidget(button7, 2, 7);
    echoLayout->addWidget(button8, 3, 5);
    echoLayout->addWidget(button9, 3, 6);
    echoLayout->addWidget(button10,3, 7);
    echoLayout->addWidget(button11,4, 6);

    echoGroup->setLayout(echoLayout);

    QGridLayout *layout = new QGridLayout;
    layout->addWidget(echoGroup, 0, 0);// 0,0 définit la position de notre layout
    setLayout(layout);

    setWindowTitle(tr("Authentification"));// définit le titre de l'application

        //connect(echoCheckBox, QOverload<int>::of(&QCheckBox::),this, &Window::echoChanged);
        //connect(echoCheckBox2, QOverload<int>::of(&QCheckBox::),this, &Window::echoChanged2);
     connect(button2 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button3 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button4 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button5 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button6 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button7 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button8 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button9 , SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button10 ,SIGNAL(clicked()),this, SLOT(bouton()));
     connect(button11 ,SIGNAL(clicked()),this, SLOT(bouton()));


     connect(button2 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button3 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button4 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button5 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button6 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button7 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button8 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button9 , SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button10 ,SIGNAL(clicked()),this, SLOT(boutonTEST()));
     connect(button11 ,SIGNAL(clicked()),this, SLOT(boutonTEST()));

     connect(CheckBox ,SIGNAL(bool()),this, SLOT(echoChanged()));
     connect(CheckBox2 ,SIGNAL(bool()),this, SLOT(echoChanged2()));
}



void Window::echoChanged()
{
        echoLineEdit->setEchoMode(QLineEdit::Password);
}

void Window::echoChanged2()
{
       echoLineEdit2->setEchoMode(QLineEdit::Password);
}
void Window::bouton()
{

    QPushButton *button = (QPushButton *)sender();
    int num_button = (button->text()[0].digitValue());
    echoLineEdit->setText(echoLineEdit->text()+QString::number(num_button));

}


void Window::boutonTEST()
{
    QPushButton *button = (QPushButton *)sender();
    int num_button = (button->text()[0].digitValue());

  echoLineEdit2->setText(echoLineEdit2->text()+QString::number(num_button));
}
