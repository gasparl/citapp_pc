---
title: 'CITapp - a response time-based Concealed Information Test lie detector web application'
tags:
  - concealed information test
  - deception detection
  - lie detection
  - response time
  - javascript
authors:
 - name: Gáspár Lukács
   orcid: 0000-0001-9401-4830
   affiliation: 1
affiliations:
 - name: University of Vienna, Department of Basic Psychological Research and Research Methods, Austria
   index: 1
date: 17 January 2019
bibliography: paper.bib
---

# Summary

Undetected deception may have extremely high costs in certain scenarios, such as counterterrorism, pre-employment screening for intelligence agencies, or high-stake criminal proceedings. However, meta-analyses have repeatedly shown that without special aid, based on their own best judgment only, people (including police officers, detectives, and professional judges) distinguish lies from truth on a level hardly better than mere chance [@hartwig2011].

The response time-based Concealed Information Test (RT-CIT) aims to reveal whether a person is concealing knowledge regarding a certain detail [@seymour2000]. To illustrate the CIT, let us consider a murder case scenario in which the murder weapon is known only to the perpetrator and the investigators. In this case, the CIT could include the actual murder weapon (the probe; e.g. "rifle") and several other weapons (irrelevants; e.g. "knife," and "rope") as the items that would be sequentially presented to a suspect in a random order. When each item has to be responded to with a keypress, the recognition of the probe (in this case, "rifle") by a guilty person (who is aware of the relevance of that item) will typically result in a slower response to that item than to the irrelevant items. Thereby, based on the probe-irrelevant RT differences, a guilty person can be distinguished from innocent ones.

The standard RT-CIT includes a single (randomly chosen) target irrelevant item that requires pressing a response key different from the response key for probe and other, nontarget irrelevant items. For example, the key "I" has to be pressed whenever the target item appears, while the key "E" has to be pressed whenever any of the other items (probe and nontarget irrelevants) appear. This target item, which appears at random times, ensures that the examinees keep paying attention to the changing items. However, a recent study improved this method by including additional filler items that, similarly as the target, appear randomly throughout the task and have to be categorized with one of the two response keys. These were hypothesized to induce even closer attention to the items, and hence also to the probe [@lukacs2017]. This method robustly increased the CIT accuracy in distinguishing guilty examinees from innocent ones. This enhanced version, however, is much more difficult to implement, especially due to the complex randomization rules in respect of the filler items. Therefore, the primary aim of this application is to provide a readily available tool for the independent testing and replication of this method.

This application requires no technical knowledge; it can simply be opened and used in a Google Chrome browser. Furthermore, by uploading it on any server, it can also be made available online, where it can then be easily accessed anytime, from anywhere. Once loaded into the browser, it may again be used offline as well. One such online version is always available directly via the site of the repository itself: https://gasparl.github.io/citapp_pc/CITapp.html.

The details and settings of the test can be entered and selected, including the specification of the probe, irrelevant, and target items, on the start page; see Figure 1. After these basic information details are given, the test may be initiated. The examinee then simply has to follow the instructions on the screen. The full results data (and also a preliminary evaluation) are automatically provided and downloadable after the completion of the test.

![Start page screenshot.](startpage.png)

This is, at the same time, the very first publicly available application for a valid, scientifically proven lie detection method. While for now it is only intended for research purposes, this may provide the basis of a freely available test that in the future may be used by appropriate investigative and other authorities all over the world.

# Note

The basic framework of this application was first used in a recent online study; the resulting manuscript is currently under review [@lukacs2019]. An even more similar offline version is being used in a currently ongoing experiment. Still, even compared to the latter, the vital difference in the present application is the user interface that allows the task to be easily administered without any technical expertise.

# Acknowledgments

Gáspár Lukács is a recipient of a DOC Fellowship of the Austrian Academy of Sciences at the Institute for Basic Psychological Research at the University of Vienna. Thanks to Bennett Kleinberg for inspiration.

# References