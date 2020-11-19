#ifndef WINDOW_H
#define MAINWINDOW_H

#include <QWidget>
#include <QPushButton>
QT_BEGIN_NAMESPACE
class QLineEdit;
QT_END_NAMESPACE

class Window : public QWidget
{
    Q_OBJECT

public:
    Window(QWidget *parent = nullptr);
    void echoChanged();
    void echoChanged2();
    void Checkbox();

    QPushButton *button1 = new QPushButton("Se connecter");
    QPushButton *button2 = new QPushButton("1");
    QPushButton *button3 = new QPushButton("2");
    QPushButton *button4 = new QPushButton("3");
    QPushButton *button5 = new QPushButton("4");
    QPushButton *button6 = new QPushButton("5");
    QPushButton *button7 = new QPushButton("6");
    QPushButton *button8 = new QPushButton("7");
    QPushButton *button9 = new QPushButton("8");
    QPushButton *button10 = new QPushButton("9");
    QPushButton *button11 = new QPushButton("0");

public slots:
void bouton();
void boutonTEST();
private:
    QLineEdit *echoLineEdit;
    QLineEdit *echoLineEdit2;
};

#endif // MAINWINDOW_H

