#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QWidget>

QT_BEGIN_NAMESPACE
class QLineEdit;
QT_END_NAMESPACE

class Window : public QWidget
{
    Q_OBJECT

public:
    Window(QWidget *parent = nullptr);
    void echoChanged(int);
     void echoChanged2(int);
public slots:

private:
   QLineEdit *echoLineEdit;
   QLineEdit *echoLineEdit2;
};
#endif // MAINWINDOW_H
