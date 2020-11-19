#ifndef WINDOW_H
#define WINDOW_H
#include "window.h"

#include <QWidget>

QT_BEGIN_NAMESPACE
class QLineEdit;
QT_END_NAMESPACE

//! [0]
class Window : public QWidget
{
Q_OBJECT

public:
Window(QWidget *parent = nullptr);

public slots:

private:
QLineEdit *echoLineEdit;
};
//! [0]

#endif
